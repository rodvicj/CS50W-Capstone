from django.contrib.auth.models import AbstractUser
from django.db import models

from markdownx.models import MarkdownxField


class User(AbstractUser):
    pass


COLORS = (
    ("Slate", "SLATE"),
    ("Gray", "GRAY"),
    ("Zinc", "ZINC"),
    ("Neutral", "NEUTRAL"),
    ("Stone", "STONE"),
    ("Red", "RED"),
    ("Orange", "ORANGE"),
    ("Amber", "AMBER"),
    ("Yellow", "YELLOW"),
    ("Lime", "LIME"),
    ("Green", "GREEN"),
    ("Emerald", "EMERALD"),
    ("Teal", "TEAL"),
    ("Cyan", "CYAN"),
    ("Sky", "SKY"),
    ("Blue", "BLUE"),
    ("Indigo", "INDIGO"),
    ("Violet", "VIOLET"),
    ("Purple", "PURPLE"),
    ("Fuchsia", "FUCHSIA"),
    ("Pink", "PINK"),
    ("Rose", "ROSE"),
)

TYPES = (
    ("Css", "CSS"),
    ("Html", "HTML"),
    ("Bootstrap", "BOOTSTRAP"),
    ("Python", "PYTHON"),
    ("Django", "DJANGO"),
    ("JavaScript", "JAVASCRIPT"),
    ("React.js", "REACT.JS"),
    ("TypeScript", "TYPESCRIPT"),
    ("Tailwind.css", "TAILWIND.CSS"),
    ("Blog", "BLOG"),
    ("Astro.js", "ASTRO.JS"),
)


class Technology(models.Model):
    name = models.CharField(choices=TYPES, max_length=55)
    color = models.CharField(choices=COLORS, max_length=55)
    # logo = models.URLField(blank=True, max_length=255)

    def __str__(self):
        return f"{self.name}"


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


class Post(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="post")
    title = models.CharField(blank=False, max_length=255)
    # url = models.URLField(blank=True)
    description = models.CharField(blank=False, max_length=255)
    timestamp = models.DateTimeField(auto_now_add=True)
    img_src = models.CharField(blank=False, max_length=255)
    img_alt = models.CharField(blank=False, max_length=255)
    content = MarkdownxField()
