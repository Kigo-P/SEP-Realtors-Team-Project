from random import choice as rc
from faker import Faker
from app import app
from models import db, User, Admin, Buyer, Property, Feature, Image, Infrastructure

with app.app_context():
    # Initializing Faker
    fake = Faker()

    # Property types
    property_type_list = ['Apartment', 'Bedsitter', 'Block of flats', 'Bungalow', 'House', 'Mansion', 'Penthouse', 'Villa']

    # Create User instances
    users = [
        User(first_name="Alice", last_name="Wahome", email="alicew@gmail.com", password="12345", contact=720114113, user_role="admin"),
        User(first_name="Bob", last_name="Onyango", email="bobonyango@gmail.com", password="qwerty", contact=798012234, user_role="buyer"),
        User(first_name="Mary", last_name="Mumbua", email="mumbuam@gmail.com", password="asdf", contact=721134890, user_role="buyer"),
        User(first_name="Abel", last_name="Mutua", email="abelchizzy@gmail.com", password="zxcv", contact=734212334, user_role="buyer")
    ]

    db.session.add_all(users)
    db.session.commit()

    # Create Admin instances
    admins = [Admin(email="alicew@gmail.com", password="12345", user_id=1)]
    db.session.add_all(admins)
    db.session.commit()

    # Create Buyer instances
    buyers = [
        Buyer(email="bobonyango@gmail.com", password="qwerty", user_id=2),
        Buyer(email="mumbuam@gmail.com", password="asdf", user_id=3)
    ]
    db.session.add_all(buyers)
    db.session.commit()

    # Create Property instances
    properties = [
        Property(title="Luxury Apartment", price=300000, description="A beautiful luxury apartment in the city center.", location="Westlands", property_type=rc(property_type_list)),
        Property(title="Cozy Cottage", price=150000, description="A cozy cottage in the countryside.", location="Kilimani", property_type=rc(property_type_list)),
        Property(title="Modern Villa", price=210000, description="A modern villa with stunning views.", location="Lavingtone", property_type=rc(property_type_list)),
        Property(title="Charming Bungalow", price=250000, description="A charming bungalow perfect for families.", location="Kileleshwa", property_type=rc(property_type_list)),
        Property(title="Stylish Penthouse", price=280000, description="A stylish penthouse in a prime location.", location="Upperhill", property_type=rc(property_type_list))
    ]

    db.session.add_all(properties)
    db.session.commit()

    # Create Feature instances
    features = [
        Feature(name="Gym", property_id=1),
        Feature(name="Balcony", property_id=1),
        Feature(name="Fireplace", property_id=2),
        Feature(name="Backyard", property_id=2),
        Feature(name="Smart Home Technology", property_id=3)
    ]
<<<<<<< HEAD

    db.session.add_all(features)
    db.session.commit()

    # Create Image instances
    images = [
        Image(name="https://images.pexels.com/photos/430216/pexels-photo-430216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", property_id=1),
        Image(name="https://images.pexels.com/photos/1131573/pexels-photo-1131573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", property_id=2),
        Image(name="https://images.pexels.com/photos/36355/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", property_id=3),
        Image(name="https://images.pexels.com/photos/2416472/pexels-photo-2416472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", property_id=4),
        Image(name="https://images.pexels.com/photos/7078231/pexels-photo-7078231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", property_id=5)
    ]

    db.session.add_all(images)
    db.session.commit()

=======

    db.session.add_all(features)
    db.session.commit()

    # Create Image instances
    images = [
        Image(name="Luxury Apartment Image", property_id=1),
        Image(name="Cozy Cottage Image", property_id=2),
        Image(name="Modern Villa Image", property_id=3),
        Image(name="Charming Bungalow Image", property_id=4),
        Image(name="Stylish Penthouse Image", property_id=5)
    ]

    db.session.add_all(images)
    db.session.commit()

>>>>>>> 39377fcd88ceed834e00871b6cebb49cb82b97c7
    # Create Infrastructure instances
    infrastructures = [
        Infrastructure(name="Elevator", property_id=1),
        Infrastructure(name="Pool", property_id=1),
        Infrastructure(name="Garden", property_id=2),
        Infrastructure(name="Garage", property_id=2),
        Infrastructure(name="Private Garden", property_id=3)
    ]

    db.session.add_all(infrastructures)
    db.session.commit()

    print("Database seeded successfully")




<<<<<<< HEAD





=======
>>>>>>> 39377fcd88ceed834e00871b6cebb49cb82b97c7
