# 🎭 Face Detection Website

A modern **Web-Based Real-Time Face Detection System** built with **Python**, **Flask**, and **OpenCV**. The application enables users to access their webcam directly from a web browser, stream video frames to a Flask server, and perform real-time face detection using computer vision techniques. Detected faces are highlighted with bounding boxes, and the total number of faces is displayed instantly.

> **Experience fast, lightweight, and real-time face detection directly from your browser.**

---

# ✨ Features

- 🎥 Real-time webcam face detection
- 👤 Automatic face counting
- 📦 Face bounding box visualization
- 🌐 Browser-based camera access
- ⚡ Fast image processing using OpenCV
- 🖥️ Flask REST API architecture
- 📱 Responsive web interface
- 🧠 Lightweight Haar Cascade detection
- 🔄 Real-time image streaming
- 🚀 Easy deployment and customization

---

# 🛠️ Tech Stack

## Backend

- Python 3.x
- Flask

## Computer Vision

- OpenCV
- Haar Cascade Classifier

## Data Processing

- NumPy
- Base64 Encoding/Decoding

## Frontend

- HTML5
- CSS3
- JavaScript
- Bootstrap
- Jinja2 Templates

## AI / ML Ready

The project environment also supports advanced AI libraries for future enhancements:

- TensorFlow
- Keras
- DeepFace
- MTCNN
- MediaPipe

---

# 📚 Main Libraries Used

| Library | Purpose |
|----------|---------|
| **Flask** | REST API and Web Framework |
| **OpenCV** | Real-time face detection and image processing |
| **NumPy** | Image array manipulation |
| **Base64** | Image encoding and decoding for web communication |
| **TensorFlow / Keras** | Deep Learning Support *(Optional)* |
| **DeepFace** | Face Recognition *(Optional)* |
| **MTCNN** | Neural Network Face Detection *(Optional)* |
| **MediaPipe** | Face Landmark Detection *(Optional)* |

---

# 📂 Project Structure

```text
face-detection-website/
│
├── app.py
├── detector.py
├── requirements.txt
├── haarcascade_frontalface_default.xml
├── README.md
│
├── templates/
│   ├── index.html
│   ├── detect.html
│   ├── about.html
│   ├── contact.html
│   └── base.html
│
├── static/
│   ├── css/
│   ├── js/
│   ├── images/
│   └── assets/
│
└── ...
```

---

# 🚀 Features Overview

- 🎥 Live Webcam Streaming
- 👤 Face Detection
- 📊 Face Counting
- 📦 Bounding Box Visualization
- 🌐 Flask REST API
- ⚡ Real-Time Processing
- 💻 Browser-Based Interface
- 📱 Responsive Design
- 🧠 AI-Ready Architecture
- 🚀 Lightweight Performance

---

# ⚙️ Installation

## 1. Clone the Repository

```bash
git clone https://github.com/subham-paul/face-detection-website.git
```

```bash
cd face-detection-website
```

---

## 2. Create a Virtual Environment

### Windows

```bash
python -m venv venv
```

Activate:

```bash
venv\Scripts\activate
```

### Linux / macOS

```bash
python3 -m venv venv
```

Activate:

```bash
source venv/bin/activate
```

---

## 3. Install Dependencies

```bash
pip install -r requirements.txt
```

---

## 4. Run the Application

```bash
python app.py
```

or

```bash
flask run
```

---

# 🌐 Access the Application

Open your browser:

```
http://127.0.0.1:5000
```

---

# 🏗️ System Architecture

```text
Browser Webcam
      │
      ▼
HTML + JavaScript
      │
      ▼
REST API (Flask)
      │
      ▼
Base64 Image Decoding
      │
      ▼
OpenCV Face Detection
      │
      ▼
Bounding Boxes & Face Count
      │
      ▼
Base64 Encoding
      │
      ▼
Browser Display
```

---

# ⚙️ How It Works

### Step 1 — Camera Access

The browser requests permission to access the user's webcam using JavaScript.

---

### Step 2 — Frame Capture

Live video frames are captured continuously.

---

### Step 3 — Image Transfer

Captured frames are converted into Base64 strings and sent to the Flask server through REST API requests.

---

### Step 4 — Face Detection

The Flask server:

- Decodes the Base64 image
- Converts it into a NumPy array
- Uses OpenCV to detect faces with the Haar Cascade classifier
- Draws bounding boxes around detected faces
- Counts the number of detected faces

---

### Step 5 — Return Processed Image

The processed frame is encoded back into Base64 format and returned to the browser.

---

### Step 6 — Display Results

The browser updates the live video feed with:

- 👤 Face Bounding Boxes
- 🔢 Face Count
- 🎥 Real-Time Detection

---

# 🧠 Detection Pipeline

```text
Webcam
   │
   ▼
JavaScript
   │
   ▼
Base64 Encoding
   │
   ▼
Flask REST API
   │
   ▼
NumPy Conversion
   │
   ▼
OpenCV
   │
   ▼
Haar Cascade Face Detection
   │
   ▼
Bounding Boxes
   │
   ▼
Face Count
   │
   ▼
Browser Display
```

---

# 📊 Applications

- Smart Attendance Systems
- Visitor Monitoring
- AI Surveillance
- Security Systems
- Computer Vision Learning
- Human-Computer Interaction
- Face Detection Research
- Educational Demonstrations

---

# 🚀 Future Enhancements

- 😀 Emotion Recognition
- 🆔 Face Recognition
- 🧠 Deep Learning Detection (YOLO / SSD)
- 👥 Multiple Face Tracking
- 🎭 Face Mask Detection
- 📷 Image Upload Detection
- ☁️ Cloud Deployment
- 📱 Mobile Support
- 🔒 User Authentication
- 📊 Detection Analytics Dashboard

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository.

2. Create a feature branch.

```bash
git checkout -b feature/NewFeature
```

3. Commit your changes.

```bash
git commit -m "Add New Feature"
```

4. Push your changes.

```bash
git push origin feature/NewFeature
```

5. Open a Pull Request.

---

# 🐞 Reporting Issues

If you encounter any bugs or have feature requests, please open an issue with detailed information.

---

# 📜 License

This project is licensed under the **MIT License**.

---

# 👨‍💻 Author

## **Subham Paul**

Passionate about **Artificial Intelligence, Computer Vision, Python, Flask, Automation, and Web Development.**

- GitHub: https://github.com/subham-paul
- LinkedIn: https://www.linkedin.com/in/subham-paul-india/

---

# ⭐ Show Your Support

If you found this project useful:

- ⭐ Star this repository
- 🍴 Fork the project
- 🤝 Contribute
- 💬 Share your feedback

---


## 🙏 Acknowledgements

Special thanks to the open-source communities behind:

- Python
- Flask
- OpenCV
- NumPy
- TensorFlow
- Keras
- DeepFace
- MTCNN
- MediaPipe

for providing the technologies that make modern computer vision applications possible.

---

> **"Detect faces instantly through your browser with the power of Computer Vision and Artificial Intelligence."** 🎭👁️🚀
