from flask import Flask, request, jsonify
import os
from flask_cors import CORS
from controllers.readFile import read_File

# Creation of the flask backend implementing CORS for cross-origin
app = Flask(__name__)
CORS(app)

# The folder to save items uploaded
UPLOADED_FOLDER = 'uploads'
os.makedirs(UPLOADED_FOLDER, exist_ok=True)
   
# Endpoint to threat the Excel spreadsheet
@app.route('/upload', methods=['POST'])
def upload_file():
    # Verifying if the file is present
    if 'file' not in request.files:
        return 'You need to upload a file', 400
    
    # To save the file inside the folder uploads
    file = request.files['file']
    file_path = os.path.join(UPLOADED_FOLDER, file.filename)
    file.save(file_path)

    # Returning the response to the frontend in a json format
    try:
        modifiedFile = read_File(file_path)
        return modifiedFile.to_json(), 200
    except Exception as e:
        return f'Error: {str(e)}', 500

if __name__ == '__main__':
    app.run(debug=True, port=8000)
