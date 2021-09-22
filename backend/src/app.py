import string
import random
from flask import Flask, request
from flask_pymongo import PyMongo
from werkzeug.security import generate_password_hash, check_password_hash
import config


app = Flask(__name__)
app.config["MONGO_URI"] = config.MONGO_URI
mongo = PyMongo(app)


@app.route('/users', methods=['POST'])
def create_user():
    username = request.json['username']
    email = request.json['email']
    password = request.json['password']
    code = ''.join(random.SystemRandom().choice(
        string.ascii_letters + string.digits) for _ in range(10))

    if username and email and password:
        hashed_password = generate_password_hash(password)
        id = mongo.db.users.insert(
            {'username': username, 'email': email,
                'password': hashed_password, 'code': code}
        )
        response = {
            'id': str(id),
            'username': username, 'email': email,
            'password': password, 'code': code
        }
        return response
    else:
        {'message': 'received'}

    return {'message': 'received'}


if __name__ == "__main__":
    app.run(debug=True)
