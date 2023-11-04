from django.db import models

# from .user import User
from django.contrib.auth.models import User
from .technology import Technology
from markdownx.models import MarkdownxField


class Project(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="project")
    name = models.CharField(blank=False, max_length=255)
    description = models.CharField(blank=False, max_length=255)
    # url = models.URLField(blank=True)
    timestamp = models.DateTimeField(auto_now_add=True)
    img_src = models.CharField(blank=False, max_length=255)
    img_alt = models.CharField(blank=False, max_length=255)
    content = MarkdownxField(blank=True)
    stacks = models.ManyToManyField(Technology, blank=True, related_name="tech_project")
