#include<stdio.h>
int main(){
float percentage[60]={0};
for (int S=0;S<5;S++){
    printf("roll no :%d\n what is your  percentage ",S+1);
scanf("%f",&percentage[S]);
if(percentage[S]<0 || percentage[S]>100){
        printf("overaction cheyaku malli cheppu\n");
        S=S-1;
}
}
for (int S=0;S<5;S++){
        if(percentage[S]<70)
           printf("Roll no: %d Attend  Sunday Special Class\n",S+1);


        }
return 0;
}



