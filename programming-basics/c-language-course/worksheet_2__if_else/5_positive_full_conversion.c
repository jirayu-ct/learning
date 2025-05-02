#include <stdio.h>

int main(){
	
	int num;
	
	printf("Press Input Number: ");
	scanf("%d", &num);
	
	if(num>=0){
		printf("%d", num);
	}
	else{
	    num *= -1;
		printf("%d", num);
	}
	
	return 0;
}
