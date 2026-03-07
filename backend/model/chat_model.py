import os
from google import genai
from openai import OpenAI
from dotenv import load_dotenv

# client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))
load_dotenv()
client = OpenAI(
     api_key=os.getenv("GEMINI_API_KEY"),
     base_url=os.getenv("BASE_URL")
)
def chat_model():
    print("ChatAI: Hello!! I''m your virtual Chat Partner, Type to converse")
    print("Type (quit) to quit ")

    user_input = input("You: ")

    # response = client.models.generate_content(
    #     model = "gemini-3-flash-preview",
    #     contents = user_input
    # )

    response = client.chat.completions.create(
        model = "gemini-3-flash-preview",
        contents = user_input
    )
z
if __name__ == "__main__":
    chat_model()