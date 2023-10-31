# from rest_framework import serializers
# from .models import Project, Post


# class ProjectSerializer(serializers.ModelSerializer):
#     author = serializers.SerializerMethodField("get_author")

#     def get_author(self, project):
#         return project.user.username

#     class Meta:
#         model = Project
#         # fields = "__all__"
#         fields = [
#             "id",
#             "author",
#             "name",
#             "description",
#             "timestamp",
#             "img_src",
#             "img_alt",
#             "content",
#             "stacks",
#         ]
#         depth = 1


# class PostSerializer(serializers.ModelSerializer):
#     # timestamp = serializers.DateTimeField()
#     author = serializers.SerializerMethodField("get_author")

#     def get_author(self, post):
#         return post.user.username

#     class Meta:
#         model = Post
#         # fields = "__all__"
#         fields = [
#             "id",
#             "author",
#             "title",
#             "description",
#             "timestamp",
#             "img_src",
#             "img_alt",
#             "content",
#         ]
#         # depth = 1
