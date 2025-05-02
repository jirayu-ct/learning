#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[]) {
    int i, num1, num2, tem, result = 0;
    
    num1 = atoi(argv[1]);
    num2 = atoi(argv[2]);
    
    if(num1>num2){
        tem = num1;
        num1 = num2;
        num2 = tem;
    }
    
    if(num1<num2){
        printf("%d - %d --> ", num1, num2);
        for(i=num1; i <= num2; i++){
        result += i;
        }
        printf("%d", result);
    }
    
    return 0;
}