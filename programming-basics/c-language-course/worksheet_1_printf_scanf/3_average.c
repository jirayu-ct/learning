#include <stdio.h>

int main(){
    
	float num1, num2, num3, sum;
    
    printf("Press Input Number1: ");
    scanf("%f", &num1);
    
    printf("Press Input Number2: ");
    scanf("%f", &num2);
    
    printf("Press Input Number3: ");
    scanf("%f", &num3);
    
    sum = (num1+num2+num3) / 3;
    printf("?????????: %f", sum);
	
	return 0;
}
