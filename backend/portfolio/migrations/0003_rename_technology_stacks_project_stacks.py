# Generated by Django 4.1.4 on 2023-01-20 04:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("portfolio", "0002_alter_technology_color_alter_technology_name"),
    ]

    operations = [
        migrations.RenameField(
            model_name="project",
            old_name="technology_stacks",
            new_name="stacks",
        ),
    ]