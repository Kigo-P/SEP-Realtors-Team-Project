from sqlalchemy.orm import validates
from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy_serializer import SerializerMixin

from config import db, bcrypt

#  creating a model called User with a table name of users
class User(db.Model, SerializerMixin):
    __tablename__ = "users"

    # creating columns
    id = db.Column(db.Integer, primary_key = True)
    first_name = db.Column(db.String(32), nullable = False)
    last_name = db.Column(db.String(32), nullable = False)
    email = db.Column(db.String(32), unique = True, nullable = False)
    password = db.Column(db.String(32), nullable = False, unique = True)
    contact = db.Column(db.Integer(), nullable=False)
    user_role = db.Column(db.String(), nullable = False)

    # a relationship that maps a related user to the admin. Adding uselist=False and cascade since it is the parent
    admin = db.relationship("Admin", uselist=False,  back_populates = "user", cascade="all, delete-orphan")
    # a relationship that maps a related user to the buyer. Adding uselist=False and cascade since it is the parent
    buyer = db.relationship("Buyer", uselist=False,  back_populates = "user", cascade="all, delete-orphan")

    #  creating a string version using repr
    def __repr__(self):
        return f"<User {self.id}: {self.first_name}, {self.last_name}, {self.email} {self.user_role} has been created>"

#  creating a model called Admin with a table name of admins
class Admin(db.Model, SerializerMixin):
    __tablename__ = "admins"

    # creating columns
    id = db.Column(db.Integer, primary_key = True)
    email = db.Column(db.String(32), unique = True, nullable = False)
    password = db.Column(db.String(32), nullable = False, unique = True)
    #  Foreign key from the user_id
    user_id = db.Column(db.Integer(), db.ForeignKey("users.id"))

    #  a relationship that maps a related admin to the user
    user = db.relationship("User", back_populates="admin")

    #  creating a string version using repr
    def __repr__(self):
        return f"<Admin {self.id}: {self.email} {self.password} {self.user_id} has been logged in>"

#  creating a model called Buyer with a table name of buyers
class Buyer(db.Model, SerializerMixin):
    __tablename__ = "buyers"

    # creating columns
    id = db.Column(db.Integer, primary_key = True)
    email = db.Column(db.String(32), unique = True, nullable = False)
    password = db.Column(db.String(32), nullable = False, unique = True)
    #  Foreign key from the user_id
    user_id = db.Column(db.Integer(), db.ForeignKey("users.id"))

    #  a relationship that maps a related buyer to the user
    user = db.relationship("User", back_populates="buyer")

    #  creating a string version using repr
    def __repr__(self):
        return f"<Buyer {self.id}: {self.email} {self.password} {self.user_id} has been logged in>"
    
#  creating a model called Property with a table name of properties
class Property(db.Model, SerializerMixin):
    __tablename__ = "properties"

    # creating columns
    id = db.Column(db.Integer, primary_key = True)
    title = db.Column(db.String(32), nullable = False)
    price = db.Column(db.Integer(10), nullable = False)
    description = db.Column(db.String(64), nullable = False)
    # image = db.Column(db.String(256), nullable = False)
    location = db.Column(db.String(32), nullable = False)
    infrastructure = db.Column(db.String(256), nullable = False)
    features = db.Column(db.String(32), nullable = False)
    additional_features = db.Column(db.String(512), nullable = False)
    property_type = db.Column(db.String(64), nullable = False)
    comment = db.Column(db.String(64))
    
    




