from django.core.management.base import BaseCommand
from kpi_app.models import KPI, Control


class Command(BaseCommand):
    help = 'Seeds KPIs and controls data'

    def handle(self, *args, **kwargs):
        kpis = [
            {'name': 'Revenue Growth', 'value': 10.0, 'description': 'Percentage increase in revenue over a period.',
             'target': 15.0},
            {'name': 'Average Deal Size', 'value': 5000.0, 'description': 'Average size of sales deals.',
             'target': 5500.0},
            {'name': 'Customer Acquisition Cost', 'value': 200.0, 'description': 'Cost of acquiring a new customer.',
             'target': 180.0},

            {'name': 'First Response Time', 'value': 2.0,
             'description': 'Average time to respond to customer inquiries (hours).', 'target': 1.0},
            {'name': 'Resolution Time', 'value': 4.0, 'description': 'Average time to resolve customer issues (hours).',
             'target': 3.0},
            {'name': 'Customer Retention Rate', 'value': 85.0,
             'description': 'Percentage of customers who return for repeat business.', 'target': 90.0},

            {'name': 'Production Cycle Time', 'value': 5.0,
             'description': 'Average time to complete a production cycle (days).', 'target': 4.0},
            {'name': 'Quality Defect Rate', 'value': 2.0,
             'description': 'Percentage of products that do not meet quality standards.', 'target': 1.0},
            {'name': 'Inventory Turnover Ratio', 'value': 6.0,
             'description': 'Frequency of inventory being sold and replaced.', 'target': 7.0},

            {'name': 'Net Profit Margin', 'value': 12.0,
             'description': 'Percentage of profit from revenue after all expenses.', 'target': 15.0},
            {'name': 'Return on Investment (ROI)', 'value': 20.0,
             'description': 'Return on investment for specific projects.', 'target': 25.0},
            {'name': 'Cash Flow', 'value': 100000.0,
             'description': 'Net amount of cash being transferred into and out of the business.', 'target': 120000.0}
        ]

        controls = [
            {'kpi_name': 'Revenue Growth', 'name': 'Monthly Sales Review', 'status': True, 'target': 50000.0},
            {'kpi_name': 'Average Deal Size', 'name': 'Deal Review Meetings', 'status': True, 'target': 5500.0},
            {'kpi_name': 'Customer Acquisition Cost', 'name': 'Marketing Spend Analysis', 'status': True,
             'target': 180.0},

            {'kpi_name': 'First Response Time', 'name': 'Support Ticket Monitoring', 'status': True, 'target': 1.0},
            {'kpi_name': 'Resolution Time', 'name': 'Incident Resolution Tracking', 'status': True, 'target': 3.0},
            {'kpi_name': 'Customer Retention Rate', 'name': 'Customer Feedback Surveys', 'status': True,
             'target': 90.0},

            {'kpi_name': 'Production Cycle Time', 'name': 'Production Scheduling', 'status': True, 'target': 4.0},
            {'kpi_name': 'Quality Defect Rate', 'name': 'Quality Assurance Checks', 'status': True, 'target': 1.0},
            {'kpi_name': 'Inventory Turnover Ratio', 'name': 'Inventory Management Review', 'status': True,
             'target': 7.0},

            {'kpi_name': 'Net Profit Margin', 'name': 'Financial Performance Reviews', 'status': True, 'target': 15.0},
            {'kpi_name': 'Return on Investment (ROI)', 'name': 'Project Evaluation', 'status': True, 'target': 25.0},
            {'kpi_name': 'Cash Flow', 'name': 'Cash Flow Forecasting', 'status': True, 'target': 120000.0}
        ]

        for kpi in kpis:
            KPI.objects.get_or_create(
                name=kpi['name'],
                defaults={
                    'value': kpi['value'],
                    'description': kpi['description'],
                    'target': kpi['target']
                }
            )

        for control in controls:
            kpi_instance = KPI.objects.get(name=control['kpi_name'])
            Control.objects.get_or_create(
                kpi=kpi_instance,
                name=control['name'],
                defaults={
                    'status': control['status'],
                    'target': control['target']
                }
            )

        self.stdout.write(self.style.SUCCESS('Successfully seeded KPIs and controls'))
