#include <stdio.h>

int multi(int num){
    int i;
    
    printf("Multi tabel of %d is\n", num);
    for(i=1; i<=12; i++){
        printf("%d x %d = %d\n", num, i, num*i);
    }
}


int main() {
    int num;
    
    printf("Please Input Multi tabel: ");
    scanf("%d", &num);
    
    multi(num);
    
    return 0;
}