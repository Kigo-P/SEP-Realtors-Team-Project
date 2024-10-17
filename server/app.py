from flask import request, session, make_response,jsonify
from flask_restful import Resource
from models import Property, User, Admin, Buyer, Review, TokenBlocklist
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import create_access_token,JWTManager, create_refresh_token, jwt_required, get_jwt_identity, current_user, verify_jwt_in_request, get_jwt
from datetime import timezone
import datetime

from config import app, db, api

# initializing JWTManager
jwt = JWTManager(app)

#  creating a custom hook that helps in knowing the roles of either the buyer or the administrator
# a method called allow that uses the user roles and give users certain rights to access certain endpoints


@jwt.user_lookup_loader
def user_lookup_callback(_jwt_header, jwt_data):
    identity = jwt_data["sub"]
    return User.query.filter_by(id=identity).first()
# confirming whether the jti is in the token blocklist
@jwt.token_in_blocklist_loader
def check_if_token_is_revoked(jwt_header, jwt_payload: dict):
    jti = jwt_payload["jti"]
    token_in_blocklist = TokenBlocklist.query.filter_by(jti=jti).first()
    return token_in_blocklist or None

# creating a Home 
class Home(Resource):
    def get(self):
        #  creating and returning a response based on the response body
        response_body = {"Message": "Welcome to SEP Realtors"}
        response = make_response(response_body, 200)
        return response
    


# creating Property Resource
class Properties(Resource):
    #  a method to get all properties
    @jwt_required()
    def get(self):
        # querying the database to get a list of all the properties
        properties = Property.query.all()
        # Looping through properties and getting a property as a dictionary using to_dict() method
        property_dict = [property1.to_dict(rules=("-reviews", )) for property1 in properties]
        # creating and making a response
        response = make_response(property_dict, 200)
        return response
    
    # @jwt_required()
    #  a method to post a property
    def post(self):
        # getting the price of the property based on the request
        data = request.get_json()
        price = data["price"]

        #  setting a conditional - if the price is greater than 1 then create a new property else give an error
        if price > 1:
            new_property = Property(
                title = data["title"],
                price = price,
                description = data["description"],
                location = data["location"],
                infrastructure = data["infrastructure"],
                features = data["features"],
                additional_features = data["additional_features"],
                property_type = data["property_type"],
                image = data["image"]
            )

            if new_property:
                #  adding and commiting the new property to the database
                db.session.add(new_property)
                db.session.commit()

                #  making the new property to a dictionary using to_dict() method
                new_property_dict = new_property.to_dict()

                #  creating and returning a response
                response = make_response(new_property_dict, 201)
                return response

        pass
    pass

# creating a PropertyById Resource
class PropertyById(Resource):
    #  a method to get one property
    def get(self, id):
        # querying and filtering the database using the id
        property1 = Property.query.filter_by(id = id).first()
        if property1:
            #  creating a property dict using the to_dict method
            property1_dict = property1.to_dict(rules=("-reviews", ))
            # creating and making a response
            response = make_response(property1_dict, 200)
            return response
        else:
            #  creating and returning a response based on the response body
            response_body = {"error": "Property  not found"}
            response = make_response(response_body, 404)
            return response

    #  a method to update a property
    def patch(self, id):
        # querying and filtering the database using the id
        property1 = Property.query.filter_by(id = id).first()
        if property1:
            #  creating a for loop to set the attributes
            data = request.get_json()
            for attr in data:
                setattr(property1, attr, data[attr])

            # commiting to the database
            db.session.commit()
            #  making the property1 to a dictionary using to_dict() method
            property1_dict = property1.to_dict()
            # creating and making a response
            response = make_response(property1_dict, 200)
            return response
        else:
            #  creating and returning a response based on the response body
            response_body = {"error": "Property  not found"}
            response = make_response(response_body, 404)
            return response

    #  a method to delete the property
    def delete(self, id):
        # querying and filtering the database using the id
        property1 = Property.query.filter_by(id = id).first()
        if property1:
            #  deleting the property1 and commiting the changes to the database
            db.session.delete(property1)
            db.session.commit()
            #  creating and returning a response based on the response body
            response_body = {"message":"Property deleted successfully"}
            response = make_response(response_body, 204)
            return response
        else:
            #  creating and returning a response based on the response body
            response_body = {"error": "Property not found"}
            response = make_response(response_body, 404)
            return response
    pass

# creating User Resource
class Users(Resource):
    #  a method to get all users
    def get(self):
        # querying the database to get a list of all the users
        users = User.query.all()
        # Looping through users and getting a user as a dictionary using to_dict() method
        user_dict = [user.to_dict(rules = ("-admin", "-buyer","-password",  )) for user in users]
        # creating and making a response
        response = make_response(user_dict, 200)
        return response
    
    # a method to post a user
    def post(self):

        #  creating a new user
        data = request.get_json()
        user_role = data["user_role"]
        #  generating a password hash
        password = generate_password_hash(data["password"])
        if user_role  == "buyer" and password == password:
            new_user = User(
                first_name = data["first_name"],
                last_name = data["last_name"],
                email = data["email"],
                password = password,
                contact = data["contact"],
                user_role = user_role
            )

            #  adding and commiting the new user to the database
            db.session.add(new_user)
            db.session.commit()
            if new_user:
                new_buyer = Buyer(
                    email = new_user.email,
                    password = new_user.password,
                    user_id =new_user.id
                )
                #  adding and commiting the new buyer to the database
                db.session.add(new_buyer)
                db.session.commit()
                #  making the new user to a dictionary using to_dict() method
                new_user_dict = new_user.to_dict(rules = ("-buyer", ))

                #  creating and returning a response
                response = make_response(new_user_dict, 201)
                return response
        elif user_role == "admin" and password == password:
            new_user = User(
                first_name = data["first_name"],
                last_name = data["last_name"],
                email = data["email"],
                password = password,
                contact = data["contact"],
                user_role = user_role
            )

            #  adding and commiting the new user to the database
            db.session.add(new_user)
            db.session.commit()
            if new_user:
                new_buyer = Admin(
                    email = new_user.email,
                    password = new_user.password,
                    user_id =new_user.id
                )
                #  adding and commiting the new buyer to the database
                db.session.add(new_buyer)
                db.session.commit()
                #  making the new user to a dictionary using to_dict() method
                new_user_dict = new_user.to_dict(rules = ("-admin", ))

                #  creating and returning a response
                response = make_response(new_user_dict, 201)
                return response
        else:
            #  creating and returning a response based on the response body
            response_body = {"error": "User role does not exist"}
            response = make_response(response_body, 404)
            return response


    pass

# creating a UserById Resource
class UserById(Resource):
    #  a method to get one user
    def get(self, id):
        # querying and filtering the database using the id
        user = User.query.filter_by(id = id).first()
        if user:
            #  creating a user dict using the to_dict method
            user_dict = user.to_dict(rules=("-admin", "-buyer","-password",  ))
            # creating and making a response
            response = make_response(user_dict, 200)
            return response
        else:
            #  creating and returning a response based on the response body
            response_body = {"error": "User  not found"}
            response = make_response(response_body, 404)
            return response
    
    #  a method to update a user
    def patch(self, id):
        # querying and filtering the database using the id
        user = User.query.filter_by(id = id).first()
        if user:
            #  creating a for loop to set the attributes
            data = request.get_json()
            for attr in data:
                setattr(user, attr, data[attr])

            # commiting to the database
            db.session.commit()
            #  making the user to a dictionary using to_dict() method
            user_dict = user.to_dict()
            # creating and making a response
            response = make_response(user_dict, 200)
            return response
        else:
            #  creating and returning a response based on the response body
            response_body = {"error": "User  not found"}
            response = make_response(response_body, 404)
            return response
    
    #  a method to delete the user
    def delete(self, id):
        # querying and filtering the database using the id
        user1 = User.query.filter_by(id = id).first()
        if user1:
            #  deleting the user1 and commiting the changes to the database
            db.session.delete(user1)
            db.session.commit()
            #  creating and returning a response based on the response body
            response_body = {"message":"user deleted successfully"}
            response = make_response(response_body, 204)
            return response
        else:
            #  creating and returning a response based on the response body
            response_body = {"error": "user not found"}
            response = make_response(response_body, 404)
            return response

    pass

#  creating a Login Resource
class Login(Resource):
    #  a post method that even checks whether the user exists
    def post(self):
        # checking the user email
        data = request.get_json()
        email = data["email"]
        # querying the users email while logging in
        user = User.query.filter_by(email=email).first()
        #  if the user does not exist then return a message
        if not user:
            #  creating and returning a response based on the response body
            response_body = {"message": f"User with email {email} does not exist"}
            response = make_response(response_body, 404)
            return response
        
        #  checking whether the passwords are similar, if not then throw an error
        if not check_password_hash(user.password, data["password"]):
            #  creating and returning a response based on the response body
            response_body = {"message": "The password entered is incorrect"}
            response = make_response(response_body, 403)
            return response
        
        #  creating an access token and a refresh token
        access_token = create_access_token(identity=user.id)
        refresh_token = create_refresh_token(identity=user.id)
        return {
            "message": "Logged in",
            "access_token": access_token, 
            "refresh_token": refresh_token
            }
    
    #  a method to refresh the token
    @jwt_required(refresh = True)
    def get(self):
        identity = get_jwt_identity()
        access_token = create_access_token(identity=identity)
        response = jsonify(access_token=access_token)
        return response

# creating a Logout Resource
class Logout(Resource):
    # creating a get method 
    @jwt_required()
    def get(self):
        jti = get_jwt()["jti"]
        # using the date time to track the date and time the user has logged out
        now = datetime.datetime.now(timezone.utc)
        # adding and commiting the TokenBlocklist 
        db.session.add(TokenBlocklist(jti=jti, created_at=now))
        db.session.commit()
        # creating and returning a response
        response = {"message": "You have been logged out"}
        return response



#  adding resources and routes to the specific Resources
api.add_resource(Home, "/", endpoint="home")
api.add_resource(Properties, "/properties" , endpoint="properties")
api.add_resource(PropertyById, "/properties/<int:id>", endpoint="/property_by_id")
api.add_resource(Users, "/users", endpoint="users")
api.add_resource(UserById, "/users/<int:id>", endpoint="/user_by_id")
api.add_resource(Login, "/login", endpoint = "/login")
api.add_resource(Logout, "/logout", endpoint = "/logout")

if __name__ == "__main__":
    app.run(debug = True, port = 5555)