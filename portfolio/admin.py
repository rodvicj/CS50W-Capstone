from django.contrib import admin
from markdownx.admin import MarkdownxModelAdmin 

from .models import Post, Technology, Project

# Register your models here.
admin.site.register(Post, MarkdownxModelAdmin)
admin.site.register(Technology)
admin.site.register(Project)
