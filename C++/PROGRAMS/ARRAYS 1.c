#include<stdio.h>
int main(){
float percentage[60]={0};
for (int S=0;S<5;S++){
    printf("roll no :%d what is your  percentage ",S+1);
scanf("%f",&percentage[S]);
}
for (int S=0 ;S<5;S++){
        if(percentage[S]<70)
           printf("Roll no: %d\n Attend  Sunday Special Class" ,S+1);

        }
return 0;
}



