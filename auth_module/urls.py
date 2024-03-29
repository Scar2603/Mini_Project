from django.urls import path 
from . import views 
from .views import UserLoginAPIView,my_question,tcs_details,accenture_details,HSBC_details

urlpatterns = [
    path('user/' , views.CreateUserView.as_view(), name = 'create_user'),
    path('login/', UserLoginAPIView.as_view(), name='login'),
    path('question/', my_question, name='question'),
    path('tcs/', tcs_details, name='tcs'),
    path('accenture/', accenture_details, name='hsbc'),
    path('hsbc/', accenture_details, name='tcs'),
 ]