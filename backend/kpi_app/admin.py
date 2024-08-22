from django.contrib import admin
from .models import KPI, Control


class ControlInline(admin.TabularInline):
    model = Control
    extra = 1


@admin.register(KPI)
class KPIAdmin(admin.ModelAdmin):
    list_display = ('name', 'value', 'target', 'created_at', 'updated_at')
    search_fields = ('name',)
    inlines = [ControlInline]


@admin.register(Control)
class ControlAdmin(admin.ModelAdmin):
    list_display = ('name', 'status', 'kpi', 'created_at', 'updated_at')
    search_fields = ('name', 'kpi__name')
