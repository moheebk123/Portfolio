from app.config.db import user_collection
from app.models.user_model import user_schema

def check_or_create_user(user_id: str):
    user = user_collection.find_one({"userId": user_id})

    if not user:
        new_user = user_schema(user_id)
        user_collection.insert_one(new_user)
        return new_user

    user["_id"] = str(user["_id"])
    return user