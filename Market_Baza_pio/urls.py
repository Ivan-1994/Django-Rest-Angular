from django.urls import path, include
from rest_framework import routers
from cars.views import *

router = routers.DefaultRouter()
router.register(r'cars', CarViewSet)
router.register(r'carsbrand', CarBrandViewSet)
router.register(r'carsmodel', CarModelViewSet)

urlpatterns = [
    #path('', include(router.urls)),
    #path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
urlpatterns += router.urls
