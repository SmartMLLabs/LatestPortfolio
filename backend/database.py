from model import Subscribe, Contact
import motor.motor_asyncio

# MongoDb Driver
client = motor.motor_asyncio.AsyncIOMotorClient('mongodb+srv://smartmllabs:Database123@cluster0.kw4uun2.mongodb.net/')
database = client.SmartMl

# Collections
collection1 = database.Subscribe
collection2 = database.Contact

async def create_subscriber(sub):
    document = sub
    result = await collection1.insert_one(document)
    return document

async def fetch_all_subscriber():
    subs = []
    cursor = collection1.find({})
    async for document in cursor:
        subs.append(Subscribe(**document))
    return subs   

async def create_contact(contact):
    document = contact
    result = await collection2.insert_one(document)
    return document

async def fetch_all_contact():
    cons = []
    cursor = collection2.find({})
    async for document in cursor:
        cons.append(Contact(**document))
    return cons
