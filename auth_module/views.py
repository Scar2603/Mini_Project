from django.shortcuts import render
from auth_module.models import User123
from django.contrib.auth.hashers import make_password
from rest_framework.views import APIView

class CreateUserView(APIView):
    def post(self,request,*args,**kwargs):
        data = request.data        
        student_name = data['student_name']
        password=data['pass']
        email = data['email']
        dob=data['dob']
        new_user = User123.objects.create(
            student_name=student_name,
            password=make_password(password),
            email=email,
            dob=dob
        )
        new_user.save()
        return render(request, 'success.html')


# Create your views here.
def create_user(request):
    print('ere')
    if request.method == 'POST':
        student_name = request.POST['student_name']
        password=request.POST['password']
        email = request.POST['email']
        dob=request.POST['dob']

        print(student_name, password, email, dob)
        
        new_user = User123.objects.create(
            student_name=student_name,
            password=make_password(password),
            email=email,
            dob=dob
        )
        new_user.save()
        return render(request, 'success.html')
    return render(request, 'user_form.html')