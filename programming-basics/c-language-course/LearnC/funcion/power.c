#include <stdio.h>

int Power(int num1, int num2){
    int i, sum=1;
    
    for(i=1; i<=num2; i++){
        sum *=num1;
    }
    return sum;
}


int main() {
    int num1, num2;
    
    printf("Please Input Number1: ");
    scanf("%d", &num1);
    
    printf("Please Input Number2: ");
    scanf("%d", &num2);
    
    
    printf("%d power %d = %d", num1, num2, Power(num1, num2));

    return 0;
}