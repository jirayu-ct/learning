#include <stdio.h>
///ข้อ4
int main() {
    int i, num1, num2, tem, result;
    
    printf("Please Input Number1: ");
    scanf("%d", &num1);
    
    printf("Please Input Number2: ");
    scanf("%d", &num2);
    
    if(num1>num2){
        tem = num1;
        num1 = num2;
        num2 = tem;
    }
    
    if(num1<num2){
        printf("ผลรวมทั้งหมดจาก %d ถึง %d คือ ", num1, num2);
        for(i=num1; i <= num2; i++){
        result += i;
        }
        printf("%d", result);
    }
    
    return 0;
}