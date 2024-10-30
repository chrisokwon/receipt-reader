from flask import Flask, request
from flask_cors import CORS, cross_origin
import easyocr
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'\

@app.route("/")
def home():
    blob = request.args.get('blob')
    return f'{blob}'

@app.route("/ocr", methods = ['POST'])
def ocr():
    print(request.files['image'])
    reader = easyocr.Reader(['en']) # this needs to run only once to load the model into memory
    result = reader.readtext(request.files['image'].read(), detail = 0)
    return result