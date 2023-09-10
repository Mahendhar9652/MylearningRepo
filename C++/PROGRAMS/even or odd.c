#include<stdio.h>
int main(){
int number;
printf("enter any number");
scanf("%d",&number);
if(number%2==0){
        printf("even number\n");
        if(number%5==0){
            printf("and divisible by 5");
        }else{
            printf("not divisble by 5");
            }
}else{
        printf("odd numver \n");
}
return 0;
}
