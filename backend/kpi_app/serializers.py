from rest_framework import serializers
from .models import KPI, Control


class ControlSerializer(serializers.ModelSerializer):
    class Meta:
        model = Control
        fields = ['id', 'name', 'status', 'created_at', 'updated_at']


class KPISerializer(serializers.ModelSerializer):
    controls = ControlSerializer(many=True, read_only=True)

    class Meta:
        model = KPI
        fields = ['id', 'name', 'value', 'description', 'target', 'controls', 'created_at', 'updated_at']
