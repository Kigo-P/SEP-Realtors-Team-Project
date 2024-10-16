from random import choice as rc
from faker import Faker
from app import app
from models import db, User, Admin, Buyer, Property, Review

with app.app_context():
    # Initializing the Faker with a fake variable
    fake = Faker()

    #  dropping and creating all tables
    db.drop_all()
    db.create_all()

    property_type_list= ['Apartment', 'Bedsitter', 'Block of flats', 'Bungalow', 'House' , 'Mansion', 'Penthouse', 'Villa']

    # Create User instances
    users = []
    users.append(User(first_name="Alice", last_name="Wahome", email="alicew@gmail", password="12345", contact=720114113, user_role="admin"))
    users.append(User(first_name="Bob", last_name="Onyango", email="bobonyango@gmail", password="qwerty", contact=798012234, user_role="buyer"))
    users.append(User(first_name="Mary", last_name="Mumbua", email="mumbuam@gmail", password="asdf", contact=721134890, user_role="buyer"))
    users.append(User(first_name="Abel", last_name="Mutua", email="abelchizzy@gmail", password="zxcv", contact=734212334, user_role="buyer"))

    # Add users to the session
    db.session.add_all(users)
    db.session.commit()
    
    # Create Admin instances
    admins = []
    admins.append(Admin(email="alicew@gmail", password="12345", user_id=1))  

    # Add admins to the session
    db.session.add_all(admins)
    db.session.commit()

    # Create Buyer instances
    buyers = []
    buyers.append(Buyer(email="bobonyango@gmail", password="qwerty", user_id=2)) 
    buyers.append(Buyer(email="mumbuam@gmail", password="asdf", user_id=3))

    # Add buyers to the session
    db.session.add_all(buyers)
    db.session.commit()

    # Create Property instances
    properties = []
    property_type_list = ['Apartment', 'Bedsitter', 'Block of flats', 'Bungalow', 'House', 'Mansion', 'Penthouse', 'Villa']

    properties.append(Property(title="Luxury Apartment", price=300000, description="A beautiful luxury apartment in the city center.", location="Westlands", infrastructure="Elevator, Pool", features="Gym, Balcony", additional_features="24/7 Security, Free Parking", property_type=rc(property_type_list), image ="https://images.pexels.com/photos/3288100/pexels-photo-3288100.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"))
    properties.append(Property(title="Cozy Cottage", price=150000, description="A cozy cottage in the countryside.", location="Kilimani", infrastructure="Garden, Garage", features="Fireplace, Backyard", additional_features="Pet-friendly, Wifi", property_type=rc(property_type_list), image="https://images.pexels.com/photos/3288103/pexels-photo-3288103.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"))
    properties.append(Property(title="Modern Villa", price=210000, description="A modern villa with stunning views.", location="Lavingtone", infrastructure="Swimming Pool, Private Garden", features="Open Floor Plan, Smart Home Technology", additional_features="Gated Community, 24/7 Security", property_type=rc(property_type_list), image = "https://images.pexels.com/photos/3288104/pexels-photo-3288104.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"))
    properties.append(Property(title="Charming Bungalow", price=250000, description="A charming bungalow perfect for families.", location="Kileleshwa", infrastructure="Large Yard, Carport", features="Close to Schools, Family-friendly", additional_features="Patio Area, Storage Shed", property_type=rc(property_type_list), image = "https://images.pexels.com/photos/101808/pexels-photo-101808.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"))
    properties.append(Property(title="Stylish Penthouse", price=280000, description="A stylish penthouse in a prime location.", location="Upperhill", infrastructure="Rooftop Terrace, Concierge", features="High-end Finishes, Spectacular Views", additional_features="Walking Distance to Shopping, Restaurants", property_type=rc(property_type_list), image="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"))
    # Add properties to the session
    db.session.add_all(properties)
    db.session.commit()

    # Create Review instances
    reviews = []
    reviews.append(Review(comment="Great place!", buyer_id=2, property_id=1)) 
    reviews.append(Review(comment="Had an amazing experience!", buyer_id=3, property_id=4))

    # Add reviews to the session
    db.session.add_all(reviews)
    db.session.commit()


    print("Database seeded successfully")



