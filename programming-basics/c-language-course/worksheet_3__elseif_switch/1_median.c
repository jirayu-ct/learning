// Online C compiler to run C program online
#include <stdio.h>

int main() {
    
    int a, b, c, median;
    
    
    printf("Press Input Number1: ");
    scanf("%d", &a);
    
    printf("Press Input Number2: ");
    scanf("%d", &b);
    
    printf("Press Input Number3: ");
    scanf("%d", &c);
    

    if(a>=b && a<=c || a<=b && a>=c){
        median = a;
    }
    else if(b>=a && b<=c || b<=a && b>=c){
        median = b;
    }
    else{
        median = c;
    }
    
    printf("median: %d", median);
    
    return 0;
}