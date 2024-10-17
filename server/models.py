from sqlalchemy.orm import validates
from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy_serializer import SerializerMixin
from config import metadata

from config import db, bcrypt

#  Join table to store the many to many relationship between properties and buyers
buyer_properties = db.Table(
    "buyers_properties",
    metadata,
    db.Column("buyer_id", db.Integer, db.ForeignKey("buyers.id"), primary_key = True),
    db.Column("property_id", db.Integer, db.ForeignKey("properties.id"), primary_key = True)
)


#  creating a model called User with a table name of users
class User(db.Model, SerializerMixin):
    __tablename__ = "users"

    # creating columns
    id = db.Column(db.Integer, primary_key = True)
    first_name = db.Column(db.String(32), nullable = False)
    last_name = db.Column(db.String(32), nullable = False)
    email = db.Column(db.String(32), unique = True, nullable = False)
    password = db.Column(db.String(32), nullable = False)
    contact = db.Column(db.Integer(), nullable=False)
    user_role = db.Column(db.String(), nullable = False)

    # a relationship that maps a related user to the admin. Adding uselist=False and cascade since it is the parent
    admin = db.relationship("Admin", uselist=False,  back_populates = "user", cascade="all, delete-orphan")
    # a relationship that maps a related user to the buyer. Adding uselist=False and cascade since it is the parent
    buyer = db.relationship("Buyer", uselist=False,  back_populates = "user", cascade="all, delete-orphan")

    # setting serialization rules
    serialize_rules = ("-admin.user", "-buyer.user", )

    #  creating a string version using repr
    def __repr__(self):
        return f"<User {self.id}: {self.first_name}, {self.last_name}, {self.email}, {self.user_role} has been created>"

#  creating a model called Admin with a table name of admins
class Admin(db.Model, SerializerMixin):
    __tablename__ = "admins"

    # creating columns
    id = db.Column(db.Integer, primary_key = True)
    email = db.Column(db.String(32), unique = True, nullable = False)
    password = db.Column(db.String(32), nullable = False)
    #  Foreign key from the user_id
    user_id = db.Column(db.Integer(), db.ForeignKey("users.id"))

    #  a relationship that maps a related admin to the user
    user = db.relationship("User", back_populates="admin")

    # setting serialization rules
    serialize_rules = ("-user.admin",  )

    #  creating a string version using repr
    def __repr__(self):
        return f"<Admin {self.id}: {self.email}, {self.password}, {self.user_id} has been logged in>"

#  creating a model called Buyer with a table name of buyers
class Buyer(db.Model, SerializerMixin):
    __tablename__ = "buyers"

    # creating columns
    id = db.Column(db.Integer, primary_key = True)
    email = db.Column(db.String(32), unique = True, nullable = False)
    password = db.Column(db.String(32), nullable = False)
    #  Foreign key from the user_id
    user_id = db.Column(db.Integer(), db.ForeignKey("users.id"))

    #  a relationship that maps a related buyer to the user
    user = db.relationship("User", back_populates="buyer")
    #  Relationship mapping the buyers to the properties
    properties = db.relationship("Property", secondary= "buyers_properties", back_populates="buyers")


    # setting serialization rules
    serialize_rules = ("-user.buyer", "-properties.buyer_properties", )

    #  creating a string version using repr
    def __repr__(self):
        return f"<Buyer {self.id}: {self.email}, {self.password}, {self.user_id} has been logged in>"
    
#  creating a model called Property with a table name of properties
class Property(db.Model, SerializerMixin):
    __tablename__ = "properties"

    # creating columns
    id = db.Column(db.Integer, primary_key = True)
    title = db.Column(db.String(32), nullable = False)
    price = db.Column(db.Integer(), nullable = False)
    description = db.Column(db.String(64), nullable = False)
    location = db.Column(db.String(32), nullable = False)
    property_type = db.Column(db.String(64), nullable = False)
    # Relationship mapping the property to the features
    features = db.relationship("Feature", back_populates="property1", cascade="all, delete-orphan")
    # Relationship mapping the property to the images
    images = db.relationship("Image", back_populates="property1", cascade="all, delete-orphan")
    # Relationship mapping the property to the images
    infrastructures = db.relationship("Infrastructure", back_populates="property1", cascade="all, delete-orphan")



    #  Relationship mapping the properties to the buyers
    buyers = db.relationship("Buyer", secondary= "buyers_properties", back_populates="properties")


    # setting serialization rules
    serialize_rules = ("-buyers.buyer_properties", )

    #  validating the price of the property to be a positive number
    @validates("price")
    def validates_price(self, key, price):
        if price < 1 :
            raise ValueError ("Price must be between greater than 1")
        return price


    #  creating a string version using repr
    def __repr__(self):
        return f"<Property {self.id}: {self.title}, {self.price} ,{self.location}, {self.property_type}  has been created>"
    

#  creating a Feature Model
class Feature(db.Model):
    __tablename__ = "features"

    # creating columns
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(256), nullable = False)
    # Foreign Key from the property id
    property_id = db.Column(db.Integer, db.ForeignKey("properties.id"))

    #  a relationship that maps the features to the property
    property1 = db.relationship("Property", back_populates="features") 

    pass

#  creating an Image Model
class Image(db.Model):
    __tablename__ = "images"

    # creating columns
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(256), nullable = False)
    # Foreign Key from the property id
    property_id = db.Column(db.Integer, db.ForeignKey("properties.id"))

    #  a relationship that maps the features to the property
    property1 = db.relationship("Property", back_populates="images") 

    pass

#  creating an Infrastructure Model
class Infrastructure(db.Model):
    __tablename__ = "infrastructures"

    # creating columns
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(256), nullable = False)
    # Foreign Key from the property id
    property_id = db.Column(db.Integer, db.ForeignKey("properties.id"))

    #  a relationship that maps the features to the property
    property1 = db.relationship("Property", back_populates="infrastructures") 

    pass

    
#  creating a model called TokenBlocklist that will be responsible when the user logs out
class TokenBlocklist(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    jti = db.Column(db.String(36), nullable=False, index=True)
    created_at = db.Column(db.DateTime, nullable=False)
    
    




