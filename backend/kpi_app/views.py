from rest_framework import viewsets, status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import KPI, Control
from .serializers import KPISerializer, ControlSerializer


@api_view(['GET'])
def index(request):
    data = {
        "company_name": "KangaCook KPI Management System",
        "logo": "https://kangacook.com/assets/kangacook_logo_en-C6XaWo8m.svg",
        "description": "The kangaCook KPI Management System is a dedicated platform designed specifically for "
                       "kangaCook. It enables the company to efficiently track, manage, and improve its key "
                       "performance indicators (KPIs). This system ensures that kangaCook maintains high standards "
                       "across its operations, with a strong focus on achieving strategic goals and operational "
                       "excellence.",
        "features": [
            "Exclusive real-time KPI tracking for kangaCook.",
            "Integrated control mechanisms to ensure accuracy and compliance within kangaCook's operations.",
            "Customized interfaces tailored to kangaCook’s specific business needs.",
            "Secure and scalable to support kangaCook’s growth and evolving requirements.",
            "Centralized dashboard for monitoring all key metrics relevant to kangaCook."
        ],
        "data": [
            {
                "key": "kpis",
                "label": "KPIs",
                "icon": "TrendingUpIcon",
                "description": "Monitor and manage the key performance indicators crucial to kangaCook’s success, with tools to analyze trends, set targets, and review performance.",
                "url": "/kpis"
            },
            {
                "key": "control",
                "label": "Controls",
                "icon": "SecurityIcon",
                "description": "Manage the controls in place to ensure kangaCook's KPIs are met and maintained according to the company's standards.",
                "url": "/controls"
            }
        ]
    }
    return Response(data, status=status.HTTP_200_OK)


class KPIViewSet(viewsets.ModelViewSet):
    queryset = KPI.objects.all()
    serializer_class = KPISerializer


class ControlViewSet(viewsets.ModelViewSet):
    queryset = Control.objects.all()
    serializer_class = ControlSerializer
