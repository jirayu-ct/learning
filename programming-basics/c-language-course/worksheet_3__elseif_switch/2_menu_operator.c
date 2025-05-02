#include <stdio.h>

int main() {
    
    float num1, num2, sum;
    int select;
    
    printf("Press input number1: ");
    scanf("%f", &num1);
    
    printf("Press input number2: ");
    scanf("%f", &num2);
    
    
    printf("กด 1 คือ บวก / กด 2 คือ ลบ / กด 3 คือ คูณ / กด 4 คือ หาร\n");
    printf("Press input Select: ");
    scanf("%d", &select);
    
    switch (select){
        case 1: //plus
            sum = num1 + num2;
            printf("Result plus: %.2f", sum);
            break;
            
        case 2: //minus
            sum = num1 - num2;
            printf("Result minus: %.2f", sum);
            break;
            
        case 3: //multiply
            sum = num1 * num2;
            printf("Result multiply: %.2f", sum);
            break;
            
        case 4: //division 
            sum = num1 / num2;
            printf("Result divided by: %.2f", sum);
            break;
            
        default:
            printf("Please Input Number 1-4");
    }
    return 0;
}
