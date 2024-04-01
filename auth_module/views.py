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
                'Image_URL': "data:image/png;base64,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"
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
                'Image_URL': "data:image/png;base64,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",
      
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
                'Image_URL': "data:image/png;base64,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",
     
            }
            for company in companies
        ]
    }  
    return JsonResponse(company_data)