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
    password = db.Column(db.String(32), nullable = False, unique = True)
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
    password = db.Column(db.String(32), nullable = False, unique = True)
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
    password = db.Column(db.String(32), nullable = False, unique = True)
    #  Foreign key from the user_id
    user_id = db.Column(db.Integer(), db.ForeignKey("users.id"))

    #  a relationship that maps a related buyer to the user
    user = db.relationship("User", back_populates="buyer")
    #  Relationship mapping the buyers to the properties
    properties = db.relationship("Property", secondary= "buyers_properties", back_populates="buyers")
    #  Relationship mapping the buyers to the reviews
    reviews = db.relationship("Review", back_populates="buyer", cascade="all, delete-orphan")

    # setting serialization rules
    serialize_rules = ("-user.buyer", "-properties.buyer_properties","-reviews.buyer", )

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
    infrastructure = db.Column(db.String(256), nullable = False)
    features = db.Column(db.String(32), nullable = False)
    additional_features = db.Column(db.String(512), nullable = False)
    property_type = db.Column(db.String(64), nullable = False)
    image = db.Column(db.String(), nullable = False)


    #  Relationship mapping the properties to the buyers
    buyers = db.relationship("Buyer", secondary= "buyers_properties", back_populates="properties")
    #  Relationship mapping the property to the reviews
    reviews = db.relationship("Review",  back_populates="property", cascade="all, delete-orphan")

    # setting serialization rules
    serialize_rules = ("-buyers.buyer_properties", "-reviews.property", )


    #  creating a string version using repr
    def __repr__(self):
        return f"<Property {self.id}: {self.title}, {self.price} ,{self.location}, {self.property_type}  has been created>"
    

#  creating a model called Review with a table name of reviews- The buyer and properties have a many to many relationship through Review
class Review(db.Model, SerializerMixin):
    __tablename__ = "reviews"

    # creating columns
    id = db.Column(db.Integer, primary_key = True)
    comment = db.Column(db.String(64))
    #  Foreign key from the buyer_id
    buyer_id = db.Column(db.Integer(), db.ForeignKey("buyers.id"))
    #  Foreign key from the property_id
    property_id = db.Column(db.Integer(), db.ForeignKey("properties.id"))

    # a relationship that maps the reviews to the buyer
    buyer = db.relationship("Buyer", back_populates = "reviews")
    #  a relationship that maps the reviews to the property
    property = db.relationship("Property", back_populates = "reviews")

    # setting serialization rules
    serialize_rules = ("-buyer.reviews", "-property.reviews", )
    

    
    




