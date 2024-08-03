from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from model import Subscribe, Contact

# App object
app = FastAPI()

from database import (
    create_subscriber,
    fetch_all_subscriber,
    create_contact,
    fetch_all_contact
)

origins = [
    'http://localhost:5174'
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"SmartML": "Labs"}

@app.get("/api/subscribers")
async def get_subscribers():
    response = await fetch_all_subscriber()
    return response

@app.get("/api/contacts")
async def get_contacts():
    response = await fetch_all_contact()
    return response

@app.post("/api/subscribers", response_model=Subscribe)
async def post_subscribe(sub: Subscribe):
    response = await create_subscriber(sub.dict())
    if response:
        return response
    raise HTTPException(400, "Something went wrong / Bad Request")

@app.post("/api/contacts", response_model=Contact)
async def post_contact(contact: Contact):
    response = await create_contact(contact.dict())
    if response:
        return response
    raise HTTPException(400, "Something went wrong / Bad Request")
