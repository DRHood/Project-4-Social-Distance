import logging
import os

from django.views.generic import View
from django.http import HttpResponse
from django.conf import settings

class FrontendAppView(View):
    # Serves compiled frontend entry point(works only after running 'npm run build')

    def get(self, request):
        try:
            with open(os.path.join(settings.REACT_APP_DIR, 'build', 'index.html')) as f:
                return HttpResponse(f.read())
        except FileNotFoundError:
            logging.exception('Production build of app not found')
            return HttpResponse(
                # This URL only used in production version of app. http://localhost:3000/, or `npm run build` to test production version
                status=501,
            )