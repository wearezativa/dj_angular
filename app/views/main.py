from django.shortcuts import render

def main(request):
    template = 'layouts/main.html'
    return render(request,template,locals())