from rest_framework import viewsets

from ..models import Project
from ..serializers.project import ProjectSerializer


class ProjectViewSet(viewsets.ModelViewSet):
    serializer_class = ProjectSerializer
    queryset = Project.objects.all().order_by("-timestamp")
