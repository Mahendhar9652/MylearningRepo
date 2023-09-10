#include<stdio.h>
int main(){
char name[30];
printf("enter your name: ");
//scanf("%s",&name);
fgets(name,50,stdin);

//printf("welcome %s" ,name);
    printf("welcome\n ");
    puts(name);
return 0;
}



