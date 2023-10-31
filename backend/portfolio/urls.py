from django.urls import path
from .views import post, project

urlpatterns = [
    path("post/<int:id>", post.post, name="post"),
    path("posts/<int:page_number>", post.posts, name="posts"),
    path("project/<int:id>", project.project, name="project"),
    path("projects", project.projects, name="projects"),
]

# path("post/<int:id>", views.get_post, name="get_post"),
# path("project/<int:id>", views.get_project, name="get_project"),
