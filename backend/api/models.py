from django.db import models

class Files(models.Model):
    file = models.FileField(null=True)

    def __str__(self):
        return f'{self.file}' 