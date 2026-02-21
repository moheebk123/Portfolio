from fastapi import APIRouter
from app.controllers.user_controller import check_or_create_user

router = APIRouter()

@router.get("/check-user")
def check_user(userId: str):
    return check_or_create_user(userId)