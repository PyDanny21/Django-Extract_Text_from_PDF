from django.urls import path
from . import views
urlpatterns = [
    path('signup',views.signup,name='signup'),
    path('login',views.login,name='login'),
    path('logout',views.logout,name='logout'),
    path('',views.upload,name='upload'),
    path('preview/<int:pk>/',views.preview,name='preview'),
]
