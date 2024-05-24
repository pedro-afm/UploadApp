from flask import Flask, request
import pandas as pd
import os
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
UPLOADED_FOLDER = 'backend/uploads'
os.makedirs(UPLOADED_FOLDER, exist_ok=True)
   
if __name__ == '__main__':
    app.run(debug=True, port=8000)
