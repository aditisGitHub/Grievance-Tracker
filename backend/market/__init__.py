from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_login import LoginManager, login_manager

app= Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///market.db' #creating the file that will be identified as database
app.config['SECRET_KEY']= 'cf6feb58dab5237aef6a11ba'
db= SQLAlchemy(app) 
bcrypt= Bcrypt(app)
login_manager= LoginManager(app)
login_manager.login_view = "login_page"
login_manager.login_message_category="info"

from market import routes
