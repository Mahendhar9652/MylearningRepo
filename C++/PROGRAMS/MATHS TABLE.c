#include<stdio.h>
#include<math.h>
int main(){
    int n;
    printf("which table you want ");
    scanf("%d",&n);
    for (int T=1; T <=10;T++){
    printf("%d * %d = %d\n" ,n,T,n*T);
    }
return 0;
}



