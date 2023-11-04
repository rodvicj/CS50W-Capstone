from rest_framework.routers import SimpleRouter

from .views import UserViewSet, GroupViewSet

router = SimpleRouter(trailing_slash=False)
router.register(r'users', UserViewSet)
router.register(r'groups', GroupViewSet)

urlpatterns = router.urls
