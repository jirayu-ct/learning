#include <stdio.h>

int main(int argc, char *argv[]){

    int arr[5], i;
    int num = 0;
    int sum = 0;

    for (i = 0; i <= 4; i++){
        printf("Enter a Number arr[%d]: ", i+1);
        scanf("%d", &arr[i]);

        sum += arr[i];
    }

    printf("Array Sum: %d\n", sum);

    return 0;
}