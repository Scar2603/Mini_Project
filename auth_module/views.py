from django.shortcuts import render
from auth_module.models import User123,HSBCQuestions,QuestionsTable,ContactMessage,TechMQuestions
from django.contrib.auth.hashers import make_password
from django.contrib.auth import authenticate
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.conf import settings
from django.http import JsonResponse
import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import ContactMessage




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

def create_user(request):
    print('ere')
    if request.method == 'POST':
        student_name = request.POST['student_name']
        password=request.POST['password']
        email = request.POST['email']
        dob=request.POST['dob']
        
        new_user = User123.objects.create(
            student_name=student_name,
            password=make_password(password),
            email=email,
            dob=dob
        )
        new_user.save()
        return render(request, 'success.html')
    return render(request, 'user_form.html')

class UserLoginAPIView(APIView):
    def post(self, request, format=None):
        email = request.data.get('email')
        password = request.data.get('password')

        if email is None or password is None:
            return Response({'error': 'Please provide both email and password'}, status=status.HTTP_400_BAD_REQUEST)
        user = authenticate(email=email, password=password)

        if user is None:
 
            return Response({'error': 'Invalid Credentials'}, status=status.HTTP_401_UNAUTHORIZED)
        return Response({'success': 'User logged in successfully'}, status=status.HTTP_200_OK)


def my_question(request):
    questions = QuestionsTable.objects.all()
       
    data = {
        'questions': [
            {
                'QId': question.QId,
                'Question': question.Question,
                'Option1': question.Option1,
                'Option2': question.Option2,
                'Option3': question.Option3,
                'Option4': question.Option4,
                'Answer':question.Answer
            }
            for question in questions
        ]
    }
    return JsonResponse(data)



@csrf_exempt
def save_contact_message(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        first_name = data.get('first_name')
        last_name = data.get('last_name')
        email = data.get('email')
        message = data.get('message')
        print(f'Form data: {first_name}, {last_name}, {email}, {message}')  # Print form data
        if first_name:
            try:
                contact_message = ContactMessage.objects.create(
                    first_name=first_name,
                    last_name=last_name,
                    email=email,
                    message=message
                )
                ##print('ContactMessage saved successfully')  # Print success message
                
            except Exception as e:
                print(f'Error saving ContactMessage: {e}')  # Print any errors
        return JsonResponse({'success': True})
    else:
        return JsonResponse({'success': False, 'error': 'Invalid request method'})


def hsbc_questions(request):
    questions = HSBCQuestions.objects.all()
       
    data = {
        'questions': [
            {
                'QId': question.QId,
                'Question': question.Question,
                'Option1': question.Option1,
                'Option2': question.Option2,
                'Option3': question.Option3,
                'Option4': question.Option4,
                'Answer':question.Answer
            }
            for question in questions
        ]
    }
    return JsonResponse(data)


def techm_questions(request):
    questions = TechMQuestions.objects.all()
       
    data = {
        'questions': [
            {
                'QId': question.QId,
                'Question': question.Question,
                'Option1': question.Option1,
                'Option2': question.Option2,
                'Option3': question.Option3,
                'Option4': question.Option4,
                'Answer':question.Answer
            }
            for question in questions
        ]
    }
    return JsonResponse(data)