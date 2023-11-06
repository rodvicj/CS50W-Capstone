from rest_framework import viewsets, status
# from rest_framework.parsers import FormParser, MultiPartParser

# from rest_framework.response import Response
# from rest_framework.decorators import api_view
# from rest_framework import status
# from django.http import JsonResponse
# from django.core.paginator import Paginator, InvalidPage

from ..models import Post
from ..serializers.post import PostSerializer


class PostViewSet(viewsets.ModelViewSet):
    # filter_backends = [DjangoFilterBackend]
    # filterset_class = PostFilter
    # parser_classes = (MultiPartParser, FormParser)
    # permission_classes = [IsAuthenticated, IsObjectOwnerOrReadOnly]
    queryset = Post.objects.all()

    def get_serializer_class(self):
        # if self.action in ["create", "partial_update", "update"]:
        #     return PostWriteSerializer
        return PostSerializer


# from django_filters.rest_framework import DjangoFilterBackend
# from rest_framework.permissions import IsAuthenticated
# from rest_framework.response import Response

# from thenewboston.general.permissions import IsObjectOwnerOrReadOnly

# from ..filters.post import PostFilter
# from ..models import Post
# from ..serializers.post import PostReadSerializer, PostWriteSerializer


# @api_view(["GET"])
# def posts(request, page_number=1):
#     try:
#         posts_data = Post.objects.all().order_by("-timestamp")
#     except Post.DoesNotExist:
#         return JsonResponse(
#             {"message": "Post not found"}, status=status.HTTP_404_NOT_FOUND
#         )

#     try:
#         posts_paginated = Paginator(posts_data, 6)
#         posts_page = posts_paginated.get_page(page_number)
#         page = posts_paginated.page(page_number)
#     except InvalidPage:
#         return JsonResponse(
#             {"message": "Invalid page number"}, status=status.HTTP_400_BAD_REQUEST
#         )

#     serialized_posts = PostSerializer(posts_page, many=True)

#     return Response(
#         {
#             "posts": serialized_posts.data,
#             "page": {
#                 "number": page.number,
#                 "has_previous": page.has_previous(),
#                 "has_next": page.has_next(),
#             },
#         },
#         status=status.HTTP_200_OK,
#     )


# @api_view(["GET"])
# def post(request, id):
#     try:
#         post_data = Post.objects.get(pk=id)
#     except Post.DoesNotExist:
#         return JsonResponse(
#             {"message": "Post not found."}, status=status.HTTP_404_NOT_FOUND
#         )

#     serializer = PostSerializer(post_data, many=False)

#     return Response(serializer.data, status=status.HTTP_200_OK)
