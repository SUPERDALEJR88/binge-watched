from abc import ABC, abstractmethod
from typing import List, Optional

from models import createDatabase, User


class UserRepositoryInterface(ABC):
    @abstractmethod
    def create_user(self, userName: str, firstName: str, lastName: str) -> bool:
        pass

    @abstractmethod
    def get_user_by_id(self, userId: int) -> User:
        pass

    @abstractmethod
    def get_all_users(self) -> List[User]:
        pass

class SqliteUserRepository(UserRepositoryInterface):
    def __init__(self):
        createDatabase()

    def create_user(self, userName: str, firstName: str, lastName: str) -> bool:
        if User.get_or_none(User.userName == userName) is not None:
            return False
        return User.insert(userName=userName, firstName=firstName, lastName=lastName).execute() > 0

    def get_user_by_id(self, userId: int) -> Optional[User]:
        return User.get_or_none(User.id == userId)

    def get_all_users(self) -> List[User]:
        return list(User.select())
