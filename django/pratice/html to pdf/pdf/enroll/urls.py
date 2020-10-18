from django.urls import path
from . import views

urlpatterns = [
    path('html_to_pdf/<int:pk>',views.pdfdetail.as_view(),name='pdf'),
]