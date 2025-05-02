#include <stdio.h>

int Sum_Number(int num){
    int i, sum=0;
    
    for(i=1; i<=num; i++){
        sum += i;
    }
    return sum;
}


int main() {
    int num;
    
    printf("Please Input Number: ");
    scanf("%d", &num);
    
    printf("%d", Sum_Number(num));

    return 0;
}