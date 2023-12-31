from rest_framework import viewsets

from ..models import Post
from ..serializers.post import PostSerializer


class PostViewSet(viewsets.ModelViewSet):
    serializer_class = PostSerializer
    queryset = Post.objects.all().order_by("-timestamp")
