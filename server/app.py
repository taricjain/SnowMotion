import json
from flask import Flask, request
import requests


app = Flask(__name__)

@app.route('/', methods=['POST'])
def call_api():
    api_url = json.loads(request.data)['api_url']
    return requests.get(api_url).content

@app.after_request
def after_request(response):
  response.headers.add('Access-Control-Allow-Origin', '*')
  response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
  response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  return response


if __name__ == "__main__":
    app.run(debug=True)
