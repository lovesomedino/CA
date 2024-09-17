from django.db import models
from django.conf import settings
import os

class Files(models.Model):
    file = models.FileField(null=True)

    def __str__(self):
        return f'{self.file}' 

    def delete(self, *args, **kwargs):
        super(Files, self).delete(*args, **kwargs)
        os.remove(os.path.join(settings.MEDIA_ROOT, self.file.path))   