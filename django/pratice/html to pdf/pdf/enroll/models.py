from django.db import models

# Create your models here.
class Student(models.Model):
    stu_id = models.IntegerField()
    stu_name = models.CharField(max_length=60)

class Product(models.Model):
    pro_id = models.IntegerField()
    pro_name = models.CharField(max_length=20)
    