from django.shortcuts import render
from .form import Student

# Create your views here.
def index(request):
    if request.method == "POST":
        fm = Student(request.POST)
        if fm.is_valid():
            print('NAME',fm.cleaned_data['name'])
    else:
        fm = Student()
    return render(request,'enroll/index.html',{'form':fm})