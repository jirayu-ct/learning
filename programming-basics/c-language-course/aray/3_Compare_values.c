#include "stdio.h"
#include "stdlib.h"
#include "conio.h"
#include "time.h"

int main(int argc, char *argv[]){
    srand(time(NULL));

    int i=0, tamp = 0;
    int arr1[5];
    int arr2[5];


    for (i = 0; i <= 4; i++){
        arr1[i] = rand() % 100 + 1;
        arr2[i] = rand() % 100 + 1;
        printf("%d %d\n", arr1[i], arr2[i]);
    }

    printf("-------------------\n");
    for (i = 0; i <= 4; i++){
        if(arr1[i] > arr2[i]){
            tamp = arr1[i];
            arr1[i] = arr2[i];
            arr2[i] = tamp;
        }
        printf("%d %d\n", arr1[i], arr2[i]);
    }
    
    


    return 0;
}