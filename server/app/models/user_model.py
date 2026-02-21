from typing import List, Dict

def user_schema(user_id: str):
    return {
        "userId": user_id,
        "history": []
    }