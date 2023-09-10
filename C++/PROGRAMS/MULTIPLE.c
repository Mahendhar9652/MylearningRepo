#include<stdio.h>
int main(){
    char name [10];
      printf("enter your name : ");
      scanf("%s",name);
      printf("welcome %s\n",name);
      int rollno ;
      printf("enter your roll no: ");
      scanf("%d",&rollno);
      printf("%s,your roll no: %d",name,rollno);
         return 0;
}
