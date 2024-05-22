# utils.py (or any other module where you store utility functions)
from django.contrib.auth.base_user import AbstractBaseUser
import six
import re
from django.contrib.auth.tokens import PasswordResetTokenGenerator

def clean_text(text):
    # Remove non-alphanumeric characters and bullets (•, ●, etc.)
    cleaned_text = re.sub(r'[^a-zA-Z0-9\s•●]', '', text)
    return cleaned_text

class TokenGenerator(PasswordResetTokenGenerator):
    def _make_hash_value(self, user, timestamp):
        return (six.text_type(user.pk) + six.text_type(timestamp)+six.text_type(user.is_active))
    
generateToken=TokenGenerator()