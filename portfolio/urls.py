from django.urls import path
from . import views

urlpatterns = [
    path("post/<int:id>", views.post, name="post"),
    path("posts/<int:page_number>", views.posts, name="posts"),
    path("project/<int:id>", views.project, name="project"),
    path("projects", views.projects, name="projects"),
]

# path("post/<int:id>", views.get_post, name="get_post"),
# path("project/<int:id>", views.get_project, name="get_project"),
