#include "stdio.h"
#include "stdlib.h"
#include "conio.h"
#include "time.h"


int main(int argc, char *argv[]){
    //srand(time(NULL));

    int i = 0, j = 0;
    int max = 0;
    int min = 0;
    int arr1[5];
    int arr2[5];


    //Input Array1
    printf("Input Array1\n");
    for (i = 0; i <= 4; i++){
        printf("1_Array %d: ", i+1);
        scanf("%d", &arr1[i]);
    }

    //Input Array2
    printf("Input Array2\n");
    for (i = 0; i <= 4; i++){
        printf("2_Array %d: ", i+1);
        scanf("%d", &arr2[i]);
    }


    /*for (i = 0; i <= 4; i++){
        arr1[i] = rand() % 100 + 1;
        arr2[i] = rand() % 100 + 1;

        printf("%d %d\n", arr1[i], arr2[i]);
    }*/

    //min to max arr1[]
    printf("arr1 min to max: ");
    for(i = 0; i <= 4; i++){
        for(j = i+1; j <= 4; j++){
            if(arr1[i] > arr1[j]){
                int temp = 0;

                temp = arr1[i];
                arr1[i] = arr1[j];
                arr1[j] = temp;
            }
        }
        printf("%d ", arr1[i]);
    }
    
    printf("\n");

    //max to min arr2[]
    printf("arr2 max to min : ");
    for(i = 0; i <= 4; i++){
        for(j = i+1; j <= 4; j++){
            if(arr2[i] < arr2[j]){
                int temp = 0;

                temp = arr2[i];
                arr2[i] = arr2[j];
                arr2[j] = temp;
            }
        }
        printf("%d ", arr2[i]);
    }

    return 0;
}