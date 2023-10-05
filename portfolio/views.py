from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from django.http import JsonResponse
from django.core.paginator import Paginator, InvalidPage

from .models import Project, Post
from .serializers import ProjectSerializer, PostSerializer


@api_view(["GET"])
def projects(request):
    try:
        projects_data = Project.objects.all().order_by("-timestamp")
    except Project.DoesNotExist:
        return JsonResponse(
            {"message": "Projects not found"}, status=status.HTTP_404_NOT_FOUND
        )

    serializer = ProjectSerializer(projects_data, many=True)

    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(["GET"])
def project(request, id):
    try:
        project_data = Project.objects.get(pk=id)
    except Project.DoesNotExist:
        return JsonResponse(
            {"message": "Project not found"}, status=status.HTTP_404_NOT_FOUND
        )

    serializer = ProjectSerializer(project_data, many=False)

    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(["GET"])
def posts(request, page_number):
    try:
        posts_data = Post.objects.all().order_by("-timestamp")
    except Post.DoesNotExist:
        return JsonResponse(
            {"message": "Post not found"}, status=status.HTTP_404_NOT_FOUND
        )

    try:
        posts_paginated = Paginator(posts_data, 6)
        posts_page = posts_paginated.get_page(page_number)
        page = posts_paginated.page(page_number)
    except InvalidPage:
        return JsonResponse(
            {"message": "Invalid page number"}, status=status.HTTP_400_BAD_REQUEST
        )

    serialized_posts = PostSerializer(posts_page, many=True)

    return Response(
        {
            "posts": serialized_posts.data,
            "page": {
                "number": page.number,
                "has_previous": page.has_previous(),
                "has_next": page.has_next(),
            },
        },
        status=status.HTTP_200_OK,
    )


@api_view(["GET"])
def post(request, id):
    try:
        post_data = Post.objects.get(pk=id)
    except Post.DoesNotExist:
        return JsonResponse(
            {"message": "Post not found."}, status=status.HTTP_404_NOT_FOUND
        )

    serializer = PostSerializer(post_data, many=False)

    return Response(serializer.data, status=status.HTTP_200_OK)
