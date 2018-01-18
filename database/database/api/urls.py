
from django.conf.urls import url, include
from rest_framework.urlpatterns import format_suffix_patterns
from .views import UserRetrieval
from .views import UserValidate
from .views import QuestionList

urlpatterns = {

  url(r'^userslist/$', UserRetrieval.as_view(), name="create"),
  url(r'^usersvalid/$', UserValidate.as_view(), name="create1"),
  url(r'^questionslist/$', QuestionList.as_view(), name="create2"),

}

urlpatterns = format_suffix_patterns(urlpatterns)
