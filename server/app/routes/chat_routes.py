from fastapi import APIRouter
from app.controllers.chat_controller import chat_with_ai

router = APIRouter()

@router.post("/chat")
def chat(payload: dict):
    return {
        "answer": chat_with_ai(payload["userId"], payload["question"])
    }