from django.shortcuts import render
from auth_module.models import User123
from django.contrib.auth.hashers import make_password
from django.contrib.auth import authenticate
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.conf import settings
from django.http import JsonResponse
from .models import QuestionsTable,CompanyInfo  


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


def tcs_details(request):
    companies = CompanyInfo.objects.all()
    company_data = {
        'info': [
            {
                'Company_name': company.company_name,
                'Heading': company.heading,
                'Description': """
                TCS is the second-largest Indian company by market capitalization, the most valuable IT service
                brands worldwide, and the top Big Tech (India) company.
                It provides various services :
                ● Cloud
                ● Cognitive Business Operations
                ● Consulting
                ● Cybersecurity
                ● Artificial Intelligence
                ● Data and Analytics
                ● Enterprise Solutions
                ● IoT and Digital Engineering
                ● Network Solutions
                ● Services TCS Interactive
                Tata Consultancy Services Limited, initially started as Tata Computer Systems, was founded in
                1968 by a division of Tata Sons Limited.
                TCS Campus Recruitment Process :
                ● Roles offered:
                1. TCS Ninja - 4LPA
                2. TCS Digital - 6LPA
                ● Eligibility criteria:
                60% throughout 10th, 12th, Degree B.E/B.Tech (CSE/IT)
                ● Rounds:
                Four Rounds in the following manner
                1. Online Aptitude Test:
                - Questions based on:
                a. Quantitative
                b. Logical Reasoning
                c. Verbal Ability
                2. Technical Interview:
                - The candidates shortlisted from above ‘Online Aptitude Test’ Round has
                to appear for this round.
                - Domain specific questions will be asked in this round.
                3. Coding Test:
                - Candidates need to solve Coding questions using any of the
                programming language
                4. HR Interview:
                - The shortlisted candidates from ‘Coding Test’ will be eligible for HR
                Interview Round
                - It will check the communication skills,cultural
                fitness,strengths,weakness,etc
                ● The shortlisted students based on their scores get a chance to uplift his/her role from
                Ninja to Digital.
                ● The students need to solve coding problems to prove their competency.
                """,
                'Image_URL': settings.STATIC_URL + 'tcs.png' 
            }
            for company in companies
        ]
    }
    return JsonResponse(company_data)

def accenture_details(request):
    companies = CompanyInfo.objects.all()
    company_data = {
        'info': [
            {
                'Company_name': 'Accenture',
                'Heading': 'IT Company',
                'Description': """
                Accenture Description
                """,
                'Image_URL': settings.STATIC_URL + 'Accenture.png'  
            }
            for company in companies
        ]
    }  
    return JsonResponse(company_data)

def HSBC_details(request):
    companies = CompanyInfo.objects.all()
    company_data = {
        'info': [
            {
                'Company_name': 'HSBC',
                'Heading': 'Banking',
                'Description': """
                Description HSBC
                """,
                'Image_URL': settings.STATIC_URL + 'HSBC.png'  
            }
            for company in companies
        ]
    }  
    return JsonResponse(company_data)