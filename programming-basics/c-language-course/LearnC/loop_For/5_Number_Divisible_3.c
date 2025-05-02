#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[]) {
    int i, num1, num2, tem, result;
    
    num1 = atoi(argv[1]);
    num2 = atoi(argv[2]);
    
    if(num1>num2){
        tem = num1;
        num1 = num2;
        num2 = tem;
    }
    
    if(num1<num2){
        printf("Divisible 3: %d to %d ----> ", num1, num2);
        for(i=num1; i <= num2; i++){
            if(i%3 == 0){
                printf("%d ", i);
            }
        }
    }

    return 0;
}