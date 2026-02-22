from app.config.db import user_collection
from app.models.user_model import user_schema
from app.utils.serializer import serialize_mongo

def get_or_create_user(user_id: str):
    user = user_collection.find_one({"userId": user_id})

    if not user:
        new_user = user_schema(user_id)
        result = user_collection.insert_one(new_user)

        return {
            "userId": user_id,
            "history": []
        }

    return serialize_mongo(user)