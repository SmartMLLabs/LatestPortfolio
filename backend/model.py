from pydantic import BaseModel

class Subscribe(BaseModel):
    email: str

class Contact(BaseModel):
   fname : str 
   lname: str
   email: str
   message: str