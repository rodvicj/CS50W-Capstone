# Generated by Django 4.2.7 on 2023-11-04 06:00

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("portfolio", "0004_alter_technology_name"),
    ]

    operations = [
        migrations.DeleteModel(
            name="User",
        ),
    ]
