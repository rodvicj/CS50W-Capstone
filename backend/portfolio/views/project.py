from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from django.http import JsonResponse

from ..models import Project
from ..serializers.project import ProjectSerializer


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
