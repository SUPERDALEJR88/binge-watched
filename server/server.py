from flask import Flask, request
from flask_restful import Resource, Api
from flask_cors import CORS
from argparse import ArgumentParser

from userResources import UserIdResource, AddUserResource, UserListResource

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})
api = Api(app)

# Endpoints for User
api.add_resource(UserListResource, '/users')
api.add_resource(UserIdResource, '/users/id/<userId>')
api.add_resource(AddUserResource, '/users/addUser')

@app.route("/")
def main():
    # parser = ArgumentParser(__name__)
    # parser.add_argument('--host', help='Defines a host IP.')
    # args = parser.parse_args()
    #
    # if args.host is None:
    #     args.host = 'localhost'
    # app.run(debug=True)
    app.run(debug=True, host="0.0.0.0", port=80)

if __name__ == '__main__':
    main()
