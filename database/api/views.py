# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# Create your views here.

from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.http import Http404
from django.http import HttpResponse
from rest_framework import generics
from .models import UserInfo
from .serializers import UserInfoSerializer
import http.client
import json

class UserRetrieval(APIView):
     def post(self, request, format=None):
        serializer = UserInfoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(request.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserValidate(APIView):
     def post(self, request, format=None):
        username = request.data['username']
        password = request.data['password']
        if username and password:
            contact = UserInfo.objects.get(username=username,password=password)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)
        if contact:
            serializer = UserInfoSerializer(contact)
            return Response(serializer.data)
        return Response(status=status.HTTP_404_NOT_FOUND)
class QuestionList(APIView):
    def get(self,request,format=None):
         tag = request.GET.get('tag')
         numberq = int(request.GET.get('numberq'))
         if tag and numberq:
             conn = http.client.HTTPConnection("codeforces.com")
             headers = {'content-type': "application/json"}
             conn.request("GET", "/api/problemset.problems?tags="+tag, headers=headers)
             res = conn.getresponse()
             data = res.read()
             data=data.decode("utf-8")
             data=json.loads(data)
             data=list(data['result']['problems'])
             data=data[0:numberq]
             return Response(data)
         else:
             return Response(status=status.HTTP_404_NOT_FOUND)
