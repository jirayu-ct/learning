#include <stdio.h>

int main(){
	
	int num;
	
	printf("Press Input Number: ");
	scanf("%d", &num);
	
	if(num%2 == 0){
		printf("%d Is Even", num);
	}
	else{
		printf("%d Is Odd", num);
	}
	
	return 0;
}
