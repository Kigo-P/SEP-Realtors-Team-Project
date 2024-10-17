from flask import Flask
from flask_bcrypt import Bcrypt
from flask_migrate import Migrate
from flask_restful import Api
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from flask_cors import CORS
from datetime import timedelta


#  Initializing the app with flask
app = Flask(__name__)
# configuring the app and setting up a sqlite database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = 'MLAPUV'
app.config['JWT_ACCESS_TOKEN_EXPIRES']=timedelta(minutes=30)
app.config['JWT_ACCESS_REFRESH_EXPIRES']=timedelta(days=30)
app.json.compact = False

#  initializing metadata and adding it to the db
metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})
db = SQLAlchemy(metadata=metadata)

# initializing CORS , migrate and db with the app 
CORS(app)
migrate = Migrate(app, db)
db.init_app(app)

# initializing bcrypt
bcrypt = Bcrypt(app)

# initializing app with the api
api = Api(app)