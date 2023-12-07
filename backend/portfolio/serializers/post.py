from rest_framework import serializers

# from thenewboston.users.serializers.user import UserReadSerializer

# from ..models import Comment
from ..models import Post


class PostSerializer(serializers.ModelSerializer):
    # timestamp = serializers.DateTimeField()
    author = serializers.SerializerMethodField("get_author")

    def get_author(self, post):
        return post.user.username

    class Meta:
        model = Post
        fields = [
            "id",
            "author",
            "title",
            "description",
            "timestamp",
            "img_src",
            "img_alt",
            "content",
        ]
        # depth = 1
