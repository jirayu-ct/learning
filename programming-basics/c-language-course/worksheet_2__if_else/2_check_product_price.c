#include <stdio.h>

int main(){
	
	int number_manufacture;
	
	printf("จำนวนสินค้าที่ผลิตได้: ");
	scanf("%d", &number_manufacture);
	
	if(number_manufacture>10){
	    printf("ราคาสินค้าชิ้นล่ะ 6.5 บาท");
	}
	else{
	    printf("ราคาสินค้าชิ้นล่ะ 8 บาท");
	}
	
	return 0;
}
