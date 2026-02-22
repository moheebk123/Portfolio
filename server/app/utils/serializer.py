from bson import ObjectId

def serialize_mongo(obj):
    if isinstance(obj, list):
        return [serialize_mongo(item) for item in obj]

    if isinstance(obj, dict):
        return {
            key: serialize_mongo(value)
            for key, value in obj.items()
            if key != "_id"
        }

    if isinstance(obj, ObjectId):
        return str(obj)

    return obj