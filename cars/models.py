from django.db import models
from cars.model_chioce import *


class CarBrand(models.Model):
    car_brand = models.CharField(max_length=30)

    def __str__(self):
        return self.car_brand


class CarModel(models.Model):
    brand = models.ForeignKey(CarBrand, on_delete=models.CASCADE, related_name='car_models')
    car_model = models.CharField(max_length=30)

    def __str__(self):
        return self.car_model


class Car(models.Model):
    title = models.CharField(max_length=70)
    modification = models.CharField(max_length=30, blank=True)
    year = models.CharField(max_length=20)
    engine_displacement = models.CharField(max_length=20)
    mileage = models.CharField(max_length=20)
    vin_code = models.CharField(max_length=50, blank=True)
    price = models.CharField(max_length=50)
    description = models.TextField(max_length=9000)

    type_fuel = models.CharField(max_length=50, choices=TYPE_FUEL_CHOICE)
    color = models.CharField(max_length=50, choices=COLOR_CHOICE)
    body_style = models.CharField(max_length=50, choices=BODY_STYLE_CHOICE)
    transmission = models.CharField(max_length=50, choices=TRANSMISSION_CHOICE)
    car_condition = models.CharField(max_length=50, choices=CONDITION_CHOICE)
    car_features = models.CharField(max_length=50, choices=FEATURES_CHOICE, blank=True)
    car_security = models.CharField(max_length=50, choices=SECURITY_CHOICE, blank=True)
    interior_material = models.CharField(max_length=50, choices=INTERIOR_MATERIAL_CHOICE)

    brand = models.ForeignKey(CarBrand, on_delete=models.CASCADE)
    car_model = models.ForeignKey(CarModel, on_delete=models.CASCADE)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Машина'
        verbose_name_plural = 'Машины'


class CarImages(models.Model):
    car = models.ForeignKey(Car, on_delete=models.CASCADE, related_name='car_images')
    car_image = models.ImageField()

