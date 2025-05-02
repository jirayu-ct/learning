#include <stdio.h>

int main() {
    
    int a, b, c, d, temp;
    
    printf("Press Input A: ");
    scanf("%d", &a);
    
    printf("Press Input B: ");
    scanf("%d", &b);
    
    printf("Press Input C: ");
    scanf("%d", &c);
    
    printf("Press Input D: ");
    scanf("%d", &d);
    
    if (a>b){
        temp = a;
        a = b;
        b = temp;
        if(d>=a){
            if(c>d){
                c -= a;
                b = a+c+d;
            }
            else{
                b = a+c+d;
            }
        }
        else{
            c += a;
            b = a+c+d;
        }
    }
    
    else{
        if(c>a && a>=b){
            d += a;
            if(d>a){
                b += 2;
            }
        }
        else if(d>c){
            b += 2;
        }
        else{
            b = 2*b;
        }
    }
    printf("A=%d\nB=%d\nC=%d\nD=%d\n", a, b, c, d);

    return 0;
}
