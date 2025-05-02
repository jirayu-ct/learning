#include <stdio.h>
///ข้อ2
int main() {
    int i, num;
    
    printf("Press Input Number: ");
    scanf("%d", &num);
    
    printf("สูตรคูณแม่ %d\n", num);
    for(i=1; i <= 12; i++){
        printf("%d x %d = %d\n", num, i, num*i);
    }

    return 0;
}