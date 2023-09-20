from flask import Flask, send_file, send_from_directory, request, jsonify
from model import translate_text

app = Flask(__name__)

# Hello world route
@app.route("/hello")
def hello_world():
    return "<p>Hello, World!</p>"

# For serving index.html
@app.route("/")
def serve_static():
    return send_file("./static/index.html")

# For serving JavaScript
@app.route("/<path:path>")
def serve_file(path):
    return send_from_directory("static", path)

# For translations
@app.route("/api/translate", methods=["POST"])
def translate():
    body = request.get_json()
    translation = translate_text(body["text"])
    return jsonify({ "result": translation })
    