import os
from google import genai
from dotenv import load_dotenv, find_dotenv

load_dotenv(find_dotenv())
client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

# client = OpenAI(
#      api_key=os.getenv"GEMINI_API_KEY",
#      base_url=os.getenv"BASE_URL"
# )

def chat_model():
    print("ChatAI: Hello!! I''m your virtual Chat Partner, Type to converse")
    print("Type (quit) to quit ")

    user_input = input("You: ")

    response = client.models.generate_content(
        model = "gemini-3-flash-preview",
        contents = user_input
    )
    print(response.text)
if __name__ == "__main__":
    chat_model()

# import os

# from dotenv import load_dotenv, find_dotenv
# from google import genai

# 1. This is the crucial step you are likely missing!
# It searches for your .env file and loads the keys into memory.
# load_dotenv(find_dotenv())

# # The client gets the API key from the environment variable `GEMINI_API_KEY`.
# client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

# response = client.models.generate_content(
#     model="gemini-3-flash-preview", contents="Explain how AI works in a few words"
# )
# print(response.text)
