class FaceDetector {
    constructor() {
        this.video = document.getElementById('video');
        this.canvas = document.getElementById('canvas');
        this.startBtn = document.getElementById('startBtn');
        this.stopBtn = document.getElementById('stopBtn');
        this.faceCountElement = document.getElementById('faceCount');
        this.processedImageElement = document.getElementById('processedImage');
        
        this.stream = null;
        this.isRunning = false;
        this.processingInterval = null;
        
        this.initializeEventListeners();
    }
    
    initializeEventListeners() {
        this.startBtn.addEventListener('click', () => this.startCamera());
        this.stopBtn.addEventListener('click', () => this.stopCamera());
    }
    
    async startCamera() {
        try {
            this.stream = await navigator.mediaDevices.getUserMedia({ 
                video: { 
                    width: { ideal: 640 },
                    height: { ideal: 480 }
                } 
            });
            
            this.video.srcObject = this.stream;
            this.isRunning = true;
            
            this.startBtn.disabled = true;
            this.stopBtn.disabled = false;
            
            // Start processing frames
            this.startProcessing();
            
        } catch (error) {
            console.error('Error accessing camera:', error);
            alert('Error accessing camera. Please make sure you have given camera permissions.');
        }
    }
    
    stopCamera() {
        if (this.stream) {
            this.stream.getTracks().forEach(track => track.stop());
            this.stream = null;
        }
        
        this.isRunning = false;
        this.startBtn.disabled = false;
        this.stopBtn.disabled = true;
        
        if (this.processingInterval) {
            clearInterval(this.processingInterval);
            this.processingInterval = null;
        }
        
        this.video.srcObject = null;
        this.processedImageElement.innerHTML = '';
        this.faceCountElement.textContent = '0';
    }
    
    startProcessing() {
        this.processingInterval = setInterval(() => {
            this.processFrame();
        }, 100); // Process 10 frames per second
    }
    
    processFrame() {
        if (!this.isRunning || this.video.videoWidth === 0) return;
        
        const context = this.canvas.getContext('2d');
        this.canvas.width = this.video.videoWidth;
        this.canvas.height = this.video.videoHeight;
        
        // Draw current video frame to canvas
        context.drawImage(this.video, 0, 0, this.canvas.width, this.canvas.height);
        
        // Convert canvas to base64 image
        const imageData = this.canvas.toDataURL('image/jpeg');
        
        // Send to server for processing
        this.sendToServer(imageData);
    }
    
    async sendToServer(imageData) {
        try {
            const response = await fetch('/process_frame', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ image: imageData })
            });
            
            const result = await response.json();
            
            if (result.success) {
                this.faceCountElement.textContent = result.face_count;
                
                // Display processed image with face detection
                this.processedImageElement.innerHTML = `
                    <img src="${result.processed_image}" alt="Processed Frame" style="max-width: 100%; border-radius: 10px;">
                `;
            } else {
                console.error('Processing error:', result.error);
            }
        } catch (error) {
            console.error('Error sending frame to server:', error);
        }
    }
}

// Initialize the face detector when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new FaceDetector();
});