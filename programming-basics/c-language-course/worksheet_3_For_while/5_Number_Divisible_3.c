#include <stdio.h>
///ข้อ5
int main() {
    int i, num1, num2, tem, result;
    
    printf("Press Input Number1: ");
    scanf("%d", &num1);
    
    printf("Press Input Number2: ");
    scanf("%d", &num2);
    
    if(num1>num2){
        tem = num1;
        num1 = num2;
        num2 = tem;
    }
    
    if(num1<num2){
        printf("จำนวนที่หารด้วย 3 ลงตัว ตั้งแต่ %d ถึง %d คือ ", num1, num2);
        for(i=num1; i <= num2; i++){
            if(i%3 == 0){
                printf("%d ", i);
            }
        }
    }
    

    return 0;
}