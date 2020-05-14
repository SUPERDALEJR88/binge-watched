import json
from flask_restful import Resource, abort
from flask_restful.reqparse import RequestParser
from userRepository import UserRepositoryInterface, SqliteUserRepository

class UserIdResource(Resource):
    def __init__(self):
        self._repository: UserRepositoryInterface = SqliteUserRepository()

    # Gets a user given a user id
    def get(self, userId: int):
        user = self._repository.get_user_by_id(userId)
        if user is None:
            abort(404, message='Could not find user with value: '
                                f'id = {userId}')
        return user.to_json(), 200


class AddUserResource(Resource):
    def __init__(self):
        self._repository: UserRepositoryInterface = SqliteUserRepository()

    # Creates a track given a name
    def post(self):
        parser = RequestParser()
        parser.add_argument('userName', type=str, location='json')
        parser.add_argument('firstName', type=str, location='json')
        parser.add_argument('lastName', type=str, location='json')
        args = parser.parse_args()

        # Validate a name was given
        if not args.userName or args.userName is "":
            error = "User name is required."
            abort(400, message=error)

        if not self._repository.create_user(**args):
            error = 'Could not create user with values: '
            error += f', '.join([
                f'{arg_name} = {arg_value}'
                for arg_name, arg_value
                in args.items()
            ])
            abort(500, message=error)
        return '', 201


class UserListResource(Resource):
    def __init__(self):
        self._repository: UserRepositoryInterface = SqliteUserRepository()

    def get(self):
        users = self._repository.get_all_users()
        body = [
            user.to_json()
            for user
            in users
        ]
        return {'users': body}, 200
