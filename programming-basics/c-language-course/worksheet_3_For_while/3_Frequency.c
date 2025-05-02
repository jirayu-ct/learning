#include <stdio.h>
///ข้อ3
int main() {
    int i, num;
    
    printf("Press Input Number: ");
    scanf("%d", &num);
    
    for(i=(-500); i <=500; i+=num){
        printf("%d\n", i);
    }

    return 0;
}