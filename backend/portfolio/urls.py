from rest_framework.routers import SimpleRouter

from .views.post import PostViewSet
from .views.project import ProjectViewSet

router = SimpleRouter(trailing_slash=False)
router.register("posts", PostViewSet)
router.register("projects", ProjectViewSet)

urlpatterns = router.urls
