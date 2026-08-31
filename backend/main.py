from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

questions = [
    "Tell me about yourself?",
    "What is closure in JavaScript?",
    "Explain useState vs useEffect?",
    "What is your biggest weakness?",
    "Where do you see yourself in 5 years?"
]

@app.get("/get-question/{id}")
def get_question(id: int):
    return {"question": questions[id % len(questions)]}

@app.get("/")
def home():
    return {"message": "Bhoot is ready 👻"}