from django.shortcuts import render
from auth_module.models import User123
from django.contrib.auth.hashers import make_password
from django.contrib.auth import authenticate, login
from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import redirect
from django.contrib.auth.models import User

class CreateUserView(APIView):
    def post(self,request,*args,**kwargs):
        data = request.data        
        student_name = data['student_name']
        password=data['password']
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

from django.views.decorators.csrf import csrf_exempt

class LoginUserView(APIView):
    @csrf_exempt  # This decorator allows bypassing CSRF verification for this view
    def post(self, request, *args, **kwargs):
        email = request.data.get('email')
        password = request.data.get('password')
        
        try:
            user = User.objects.get(username=email)
        except User.DoesNotExist:
            user = None
        
        if user is not None and user.check_password(password):
            user = authenticate(username=email, password=password)
            if user is not None:
                login(request, user)
                return redirect('success.html')  # Redirect to success page
            else:
                return Response({'message': 'Invalid credentials'}, status=401)
        else:
            return Response({'message': 'Invalid credentials'}, status=401)

