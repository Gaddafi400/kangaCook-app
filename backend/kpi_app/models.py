from django.db import models


class KPI(models.Model):
    name = models.CharField(max_length=100)
    value = models.FloatField()
    description = models.TextField(blank=True, null=True)
    target = models.FloatField(blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.name}: {self.value}"


class Control(models.Model):
    kpi = models.ForeignKey(KPI, on_delete=models.CASCADE, related_name="controls")
    name = models.CharField(max_length=100)
    status = models.BooleanField(default=False)
    target = models.FloatField(blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.name}: {self.status} for KPI {self.kpi.name}"
