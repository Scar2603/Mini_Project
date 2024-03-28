from django.urls import path 
from . import views 
from .views import UserLoginAPIView,my_question,company_details

urlpatterns = [
    path('user/' , views.CreateUserView.as_view(), name = 'create_user'),
    path('login/', UserLoginAPIView.as_view(), name='login'),
    path('question/', my_question, name='question'),
    path('company/', company_details, name='company'),
 ]