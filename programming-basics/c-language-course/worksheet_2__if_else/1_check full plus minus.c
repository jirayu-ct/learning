#include <stdio.h>

int main(){
	
	int num;
	
	printf("Press Input Number: ");
	scanf("%d", &num);
	
	if(num>0){
		printf("Positive");
	}
	else{
		printf("Negative");
	}
	
	return 0;
}
