from rest_framework import serializers
from cars.models import *


class CarModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = CarModel
        fields = '__all__'


class CarBrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = CarBrand
        fields = '__all__'


class CarImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = CarImages
        fields = '__all__'


class CarSerializer(serializers.ModelSerializer):
    car_features = serializers.MultipleChoiceField(choices=FEATURES_CHOICE)
    car_security = serializers.MultipleChoiceField(choices=SECURITY_CHOICE)

    def create(self, validated_data):
        car_features = list(validated_data['car_features'])
        car_security = list(validated_data['car_security'])
        del validated_data['car_features']
        del validated_data['car_security']
        obj = Car(**validated_data)
        if car_features:
            for i in car_features:
                obj.car_features += i
        if car_security:
            for i in car_security:
                obj.car_security += i
        obj.save()
        return obj

    def to_representation(self, value):
        return {
        "id": value.id,
        "car_features": [dict(FEATURES_CHOICE)[i] for i in list(value.car_features)],
        "car_security": [dict(SECURITY_CHOICE)[i] for i in list(value.car_security)],
        "title": value.title,
        "modification": value.modification,
        "year": value.year,
        "engine_displacement": value.engine_displacement,
        "mileage": value.mileage,
        "vin_code": value.vin_code,
        "price": value.price,
        "description": value.description,
        "type_fuel": dict(TYPE_FUEL_CHOICE)[value.type_fuel],
        "color": dict(COLOR_CHOICE)[value.color],
        "body_style": dict(BODY_STYLE_CHOICE)[value.body_style],
        "transmission": dict(TRANSMISSION_CHOICE)[value.transmission],
        "car_condition": dict(CONDITION_CHOICE)[value.car_condition],
        "interior_material": dict(INTERIOR_MATERIAL_CHOICE)[value.interior_material],
        "brand": value.brand.car_brand,
        "car_model": value.car_model.car_model
    }

    class Meta:
        model = Car
        fields = '__all__'
