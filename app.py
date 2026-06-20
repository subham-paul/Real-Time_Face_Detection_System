from flask import Flask, render_template, Response, jsonify, request
import cv2
import numpy as np
import base64

app = Flask(__name__)

# Load face detection classifier
face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')

class FaceDetector:
    def __init__(self):
        self.face_count = 0
    
    def detect_faces(self, frame):
        # Convert to grayscale for face detection
        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        
        # Detect faces
        faces = face_cascade.detectMultiScale(
            gray,
            scaleFactor=1.1,
            minNeighbors=5,
            minSize=(30, 30)
        )
        
        # Draw rectangles around faces and count
        for (x, y, w, h) in faces:
            cv2.rectangle(frame, (x, y), (x+w, y+h), (0, 255, 0), 2)
            cv2.putText(frame, f'Face', (x, y-10), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 0), 2)
        
        self.face_count = len(faces)
        return frame, self.face_count

face_detector = FaceDetector()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/detect')
def detect():
    return render_template('detect.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/process_frame', methods=['POST'])
def process_frame():
    try:
        # Get image data from request
        data = request.get_json()
        image_data = data['image'].split(',')[1]  # Remove data:image/jpeg;base64, prefix
        
        # Decode base64 image
        nparr = np.frombuffer(base64.b64decode(image_data), np.uint8)
        frame = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
        
        # Detect faces
        processed_frame, face_count = face_detector.detect_faces(frame)
        
        # Encode processed frame back to base64
        _, buffer = cv2.imencode('.jpg', processed_frame)
        processed_image_data = base64.b64encode(buffer).decode('utf-8')
        
        return jsonify({
            'success': True,
            'face_count': face_count,
            'processed_image': f'data:image/jpeg;base64,{processed_image_data}'
        })
    
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        })

if __name__ == '__main__':
    app.run(debug=True)