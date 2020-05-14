from datetime import date, datetime
from peewee import *

dbName = 'BingeWatched.db'
_DATABASE = SqliteDatabase(dbName)

def createDatabase():
    with _DATABASE:
        _DATABASE.create_tables([User])

class BaseModel(Model):
    def to_json(self):
        return self.__data__

    class Meta:
        database = _DATABASE

class User(BaseModel):
    id = AutoField()
    userName = CharField(max_length=50, unique=True)
    firstName = CharField(max_length=50)
    lastName = CharField(max_length=50)
