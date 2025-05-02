#include <stdio.h>

int main(int argc, char *argv[]){

    int arr[5], i;
    int num = 0;

    for (i = 0; i <= 4; i++){
        printf("Enter a Number arr[%d]: ", i+1);
        scanf("%d", &arr[i]);

    }
    for (i = 0; i <= 4; i++)
    {
        printf("Array[%d]: %d\n",i, arr[i]);
    }
    
    

    return 0;
}