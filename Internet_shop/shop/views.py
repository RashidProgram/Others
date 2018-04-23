from django.shortcuts import render
from django.views.generic import ListView, DetailView
from .models import Shop


class TovarsListView(ListView):
    template_name = 'shop/list.html'
    model = Shop


class TovarsDetailView(DetailView):
    template_name = 'shop/detail.html'
    model = Shop
    queryset = Shop.objects.all()
