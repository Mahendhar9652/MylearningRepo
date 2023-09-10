#include<stdio.h>
struct student{
char name[3];
int rollno;
int marks;
float percentage;
};
 int main(){
struct student s1;
struct student students[3];
for (int i=0;i<3;i++){
printf("enter students %d details\n",i++);
scanf("%s",students[i].name);
printf("enter your roll no:");
scanf("%d",students[i].rollno);
printf("enter marks:");
scanf("%d",students[i].marks);
printf("enter your percentage:");
scanf("%f",students[i].percentage);
}

printf("student details \n");
for(int i=0;i<3;i++){
printf("name:%s\n",students[i].name);
printf("rollno:%d\n",students[i].name);
printf("marks:%d\n",students[i].marks);
printf("percentage: %f\n",students[i].percentage);
}
return 0;
}



