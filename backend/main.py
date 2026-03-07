from flask import Flask
from flask import Flask, request, jsonify

app = Flask(__name__)
@app.route("/")
def hello_world():
    return "Hello world one one "

user_input={"user":[]}

@app.route('/api/query', methods=['POST'])
def save():
    data = request.get_json()
    user_input["user"].append(data)
    # data = request.get_json()
    # print("Received from frontend:", data)
    # return jsonify({"status": "received"})
    return jsonify(data)

print(user_input)

if __name__ == "__main__":
    app.run(debug=True)