from flask import request, session, make_response
from flask_restful import Resource
from models import Property


from config import app, db, api

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
    def get(self):
        # querying the database to get a list of all the properties
        properties = Property.query.all()
        # Looping through properties and getting a property as a dictionary using to_dict() method
        property_dict = [property1.to_dict(rules=("-reviews", )) for property1 in properties]
        # creating and making a response
        response = make_response(property_dict, 200)
        return response
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

#  adding resources and routes to the specific Resources
api.add_resource(Home, "/", endpoint="home")
api.add_resource(Properties, "/properties" , endpoint="properties")
api.add_resource(PropertyById, "/properties/<int:id>", endpoint="/property_by_id")

if __name__ == "__main__":
    app.run(debug = True, port = 5555)