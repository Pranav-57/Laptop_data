# Generated by Django 3.1 on 2020-09-13 02:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('enroll', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('pro_id', models.IntegerField()),
                ('pro_name', models.CharField(max_length=20)),
            ],
        ),
    ]
