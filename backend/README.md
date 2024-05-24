#Introduction

This backend has the purpose of receiving the requests from frontend and call functions to threat it
It is made using Flask Python framework to read and convert an Excel spreadsheet

#Configuration

To set up the development environment, you should have the followed dependencies installed
-Flask
-Flask-Cors
-numpy
-openpyxl
-pandas
which are available in requirements.txt file.

#Functionalities
The server endpoint "/upload is going to save the Excel spreadsheet inside backend/src/uploads folder and the backend/src/controllers/readFile.py is going to threat and transform the data in order to present in the right way in the terminal

#Running the project

To run the project, you can use the command in the project root
"python backend/src/server.py"

#Results
After you make the file upload through the browser, the information is going to appear in the terminal you are running the server
