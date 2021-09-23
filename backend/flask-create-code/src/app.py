import string
import random
from flask import Flask, request
from flask_cors import CORS, cross_origin
from flask_pymongo import PyMongo
from werkzeug.security import generate_password_hash, check_password_hash
import config


app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
app.config["MONGO_URI"] = config.MONGO_URI

mongo = PyMongo(app)


@app.route('/users', methods=['POST'])
def create_user():
    username = request.json['username']
    email = request.json['email']
    dni = request.json['dni']
    date = request.json['date']
    password = request.json['password']
    code = ''.join(random.SystemRandom().choice(
        string.ascii_letters + string.digits) for _ in range(10))

    if ((mongo.db.users.find({"email": email})).count() > 0):
        return {"message": "This email already has been registered"}

    if username and email and password:
        hashed_password = generate_password_hash(password)
        id = mongo.db.users.insert(
            {'username': username, 'email': email, 'date': date, 'dni': dni,
                'password': hashed_password, 'code': code}
        )
        response = {
            'id': str(id),
            'username': username, 'dni': dni, 'email': email,
            'password': password, 'code': code, 'date': date
        }
        return response
    else:
        {'message': 'received'}

    return {'message': 'received'}


if __name__ == "__main__":
    app.run(debug=True)
