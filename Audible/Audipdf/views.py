from django.shortcuts import render,redirect,get_object_or_404
from .models import PDFFile
from django.contrib import auth,messages
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from .forms import PDFUploadForm
from PyPDF2 import PdfReader
from .utils import clean_text

def extract_text_from_pdf(pdf_file_path):
    with open(pdf_file_path, 'rb') as file:
        pdf_reader = PdfReader(file)
        text_per_page = []
        for page_num in pdf_reader.pages:
            page_text = page_num.extract_text()
            if page_text == '':
                pass
            else:
                text_per_page.append(page_text)
        return text_per_page

def upload(request):
    if request.method == 'POST':
        form = PDFUploadForm(request.POST, request.FILES)
        if form.is_valid():
            if PDFFile.objects.filter(pdf_file=form.files).exists():
                messages.info('PDF file exist')
                form = PDFUploadForm()
                return render(request, 'upload.html', {'form': form})

            else:
                pdf_instance = form.save()
                pdf_file_path = pdf_instance.pdf_file.path
                extracted_text = extract_text_from_pdf(pdf_file_path)
                # cleaned_text = [clean_text(text) for text in extracted_text]
                files=PDFFile.objects.all()
                return render(request, 'index.html', {'pdf_instance': pdf_instance, 'extracted_text': extracted_text,'files':files})
    else:
        form = PDFUploadForm()

    return render(request, 'upload.html', {'form': form})

def preview(request,pk):
    filename=get_object_or_404(PDFFile,pk=pk)
    pdf_path=filename.pdf_file.path
    pdf_instance=filename.title
    extracted_text=extract_text_from_pdf(pdf_path)
    # cleaned_text = [clean_text(text) for text in extracted_text]
    files=PDFFile.objects.all()
    return render(request,'index.html',{
        'extracted_text':extracted_text,
        'files':files,
        'pdf_instance':pdf_instance,

    })

def login(request):
    if request.method=='POST':
        username=request.POST['username']
        password=request.POST['password']
        user=auth.authenticate(username=username,password=password)
        if user is not None:
            auth.login(request,user)
            return redirect('upload')
        else:
            messages.info(request,'Invalid credentials')
            return redirect('login')

    else:
        return render(request,'login.html')

def signup(request):
    if request.method=='POST':
        username=request.POST['username']
        email=request.POST['email']
        password=request.POST['password']
        password2=request.POST['password2']
        if password==password2:
            if User.objects.filter(email=email).exists():
                messages.info(request,'Email taken')
                return redirect('signup')

            elif User.objects.filter(username=username).exists():
                messages.info(request,'Username taken')
                return redirect('signup')
            
            else:
                user=User.objects.create_user(username=username,email=email,password=password)
                user.save()
                return redirect('login')
        else:
            messages.info(request,'Passwords not matching')
            return redirect('signup')
    else:
        return render(request,'signup.html')

@login_required(login_url='login')
def logout(request):
    auth.logout(request)
    return redirect('login')