from transformers import pipeline

pipe = pipeline("translation", model="Helsinki-NLP/opus-mt-en-fi")

def translate_text(text):
    res = pipe.predict(text).pop()
    return res["translation_text"]
