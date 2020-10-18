from django.shortcuts import render
from .models import Student , Product
from easy_pdf.views import PDFTemplateResponseMixin
from django.views.generic import DetailView

# Create your views here.
# def pdfdetail(request,stu_id,pro_id):
#     stu = Student.objects.get(pk=stu_id)
#     pro = Product.objects.get(pk=pro_id)
#     return render(request,'enroll/pdf.html',{'stu':stu,'pro':pro})

class pdfdetail(PDFTemplateResponseMixin,DetailView):
    template_name = 'enroll/pdf.html'
    context_object_name = 'stu'
    model = Student