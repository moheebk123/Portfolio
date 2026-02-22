from app.config.groq import groq_client, MODEL
from app.config.db import user_collection
from app.utils.resume_loader import get_resume_text

SYSTEM_PROMPT = """
You are an AI assistant that answers questions strictly based on the candidate's resume.

Rules:
- Use ONLY the resume content.
- If answer is not present, say: "This information is not available in the resume."
- Keep answers short, clear, and professional.
"""

def chat_with_ai(user_id: str, question: str):
    resume = get_resume_text()

    messages = [
        {"role": "system", "content": SYSTEM_PROMPT},
        {"role": "user", "content": f"Resume:\n{resume}\n\nQuestion:\n{question}"}
    ]

    response = groq_client.chat.completions.create(
        model=MODEL,
        messages=messages,
        temperature=0.2
    )

    answer = response.choices[0].message.content

    user_collection.update_one(
        {"userId": user_id},
        {"$push": {"history": {"type": "user", "message": question}}}
    )
    user_collection.update_one(
        {"userId": user_id},
        {"$push": {"history": {"type": "ai", "message": answer}}}
    )

    return answer