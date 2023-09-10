#include<stdio.h>
int main(){
int age;
printf("enter your age:");
scanf("%d",&age);
if(age>=13 &&age <=19){
        printf("teenager");
}else if(age>=20 && age<=30){
        printf("young age");
}else if (age>30)
printf("middle age");
return 0;
}
