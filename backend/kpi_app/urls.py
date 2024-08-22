from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import KPIViewSet, ControlViewSet, index

router = DefaultRouter()
router.register('kpis', KPIViewSet)
router.register('controls', ControlViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('index', index, name='kangacook_kpi_index'),
]