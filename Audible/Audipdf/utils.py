# utils.py (or any other module where you store utility functions)
import re

def clean_text(text):
    # Remove non-alphanumeric characters and bullets (•, ●, etc.)
    cleaned_text = re.sub(r'[^a-zA-Z0-9\s•●]', '', text)
    return cleaned_text
