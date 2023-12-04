from django.db import models

# from .user import User
from django.contrib.auth.models import User
from markdownx.models import MarkdownxField


class Post(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="post")
    title = models.CharField(blank=False, max_length=255)
    # url = models.URLField(blank=True)
    description = models.CharField(blank=False, max_length=255)
    timestamp = models.DateTimeField(auto_now_add=True)
    # TODO: add images to backend media
    img_src = models.CharField(blank=False, max_length=255)
    img_alt = models.CharField(blank=False, max_length=255)
    content = MarkdownxField()
