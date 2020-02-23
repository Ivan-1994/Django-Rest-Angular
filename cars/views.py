from rest_framework import viewsets, mixins
from rest_framework.decorators import action

from cars.serializers import *

from cars.models import *


class CarViewSet(mixins.CreateModelMixin,
                 mixins.ListModelMixin,
                 mixins.RetrieveModelMixin,
                 viewsets.GenericViewSet):
    queryset = Car.objects.all()
    serializer_class = CarSerializer

    def get_queryset(self):
        if self.request.GET:
            return Car.objects.filter(pk=self.request.GET['id'])
        return Car.objects.all()


class CarBrandViewSet(viewsets.ModelViewSet):
    queryset = CarBrand.objects.all()
    serializer_class = CarBrandSerializer


class CarModelViewSet(viewsets.ModelViewSet):
    queryset = CarModel.objects.all()
    serializer_class = CarModelSerializer

    def get_queryset(self):
        if self.request.GET:
            return CarModel.objects.filter(brand_id__exact=self.request.GET['brand'])
        return CarModel.objects.all()
