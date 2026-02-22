from fastapi import APIRouter, Request, Response
from app.controllers.user_controller import get_or_create_user
import time
import random

router = APIRouter()

@router.get("/check-user")
def check_user(request: Request, response: Response):
    # 👇 cookie read
    user_id = request.cookies.get("portfolio-chat")

    # ❌ if cookie not exists → new user
    if not user_id:
        user_id = str(int(time.time() * random.random()))
        user = get_or_create_user(user_id)

        # 👇 cookie set (no expiry = session cookie)
        response.set_cookie(
            key="portfolio-chat",
            value=user_id,
            httponly=False,
            samesite="lax"
        )
        return user

    # ✅ if cookie exist  → existing user
    user = get_or_create_user(user_id)
    return user