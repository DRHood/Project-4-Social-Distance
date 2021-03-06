# Generated by Django 3.0.5 on 2020-04-07 07:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('socdist_app', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='event',
            name='event_img_url',
        ),
        migrations.RemoveField(
            model_name='event',
            name='group_invite',
        ),
        migrations.RemoveField(
            model_name='event',
            name='individual_invites',
        ),
        migrations.RemoveField(
            model_name='event',
            name='members',
        ),
        migrations.RemoveField(
            model_name='event',
            name='organizer',
        ),
        migrations.RemoveField(
            model_name='group',
            name='individual_invites',
        ),
        migrations.RemoveField(
            model_name='group',
            name='organizer',
        ),
        migrations.RemoveField(
            model_name='group',
            name='public',
        ),
        migrations.RemoveField(
            model_name='user',
            name='first_name',
        ),
        migrations.RemoveField(
            model_name='user',
            name='last_name',
        ),
        migrations.RemoveField(
            model_name='user',
            name='location',
        ),
        migrations.AddField(
            model_name='event',
            name='attending',
            field=models.ManyToManyField(related_name='my_events', to='socdist_app.User'),
        ),
        migrations.AddField(
            model_name='group',
            name='group_img_url',
            field=models.CharField(default='', max_length=240),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='group',
            name='members',
            field=models.ManyToManyField(related_name='my_groups', to='socdist_app.User'),
        ),
    ]
