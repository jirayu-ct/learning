#include <stdio.h>
///ข้อ1
int main() {
    int i, j, num;
    printf("จำนวนเฉพาะตั้งแต่1-1000\n");
    for (i = 2; i <= 1000; i++) {
        num = 1;
        for (j=2; j<=(i/2); j++) {
            if (i%j == 0) {
                num = 0;
                break;
            }
        }
        if (num) {
            printf("%d\n", i);
        }
    }

    return 0;
}
