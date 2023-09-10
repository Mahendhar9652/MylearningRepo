#define studentcount 5
#include<stdio.h>
int main(){
float percentage[studentcount]={0};
int count=0;
for (int S=0;S<studentcount;S++){
    printf("roll no :%d\n what is your  percentage ",S+1);
scanf("%f",&percentage[S]);
if(percentage[S]<0 || percentage[S]>100){
        count++;
        if(count>=5){
        printf("mee chavadi nenu percenatge thisukonu ");
        exit(0);
        }
        printf("overaction cheyaku malli cheppu\n");
        S=S-1;
}
}

float sumofpercentage=0;
for (int j=0;j<studentcount;j++){
    sumofpercentage= sumofpercentage+percentage[j];
}
printf("sum:%f\n",sumofpercentage);
printf("average percentage is: %f\n",sumofpercentage/studentcount);

for (int S=0;S<studentcount;S++){
        if(percentage[S]<70);
           printf("Roll no: %d Attend  Sunday Special Class\n",S+1);


        }
return 0;
}



