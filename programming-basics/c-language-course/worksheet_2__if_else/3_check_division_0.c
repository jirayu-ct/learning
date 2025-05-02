#include <stdio.h>

int main(){
	
	float num1, num2, sum;
	
	printf("Press Input Number1: ");
	scanf("%d", &num1);
	
	printf("Press Input Number2: ");
	scanf("%d", &num2);
	
	if(num2 == 0){
		printf("0 หารไม่ได้");
	}
	else{
		sum = num1/num2;
		printf("%f", sum);
	}
	
	return 0;
}