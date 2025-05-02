#include "stdio.h"
#include "stdlib.h"
#include "conio.h"
#include "time.h"

int Min_Array(int array[5]);
int Max_Array(int array[5]);


int Min_Array(int array[5])
{
    int i = 0;
    int min = array[0];

    for (i = 1; i < 5; i++){
        if (array[i] < min){
            min = array[i];
        }
    }
    return min;
}


int Max_Array(int array[5])
{
    int i = 0;
    int max = array[0];

    for (i = 1; i < 5; i++){
        if (array[i] > max){
            max = array[i];
        }
    }
    return max;
}


int main(int argc, char *argv[]){
    
    srand(time(NULL));

    int arr1[5];
    int arr2[5];
    int i = 0;
    int max = 0;
    int min = 0;
    int min_arr1 = 0;
    int max_arr2 = 0;
    
    //Input Array1
    printf("Array1\n");
    for (i = 0; i <= 4; i++){
        printf("1_Array %d: ", i+1);
        scanf("%d", &arr1[i]);
    }

    //Input Array2
    printf("Array2\n");
    for (i = 0; i <= 4; i++){
        printf("2_Array %d: ", i+1);
        scanf("%d", &arr2[i]);
    }

    
    /*for (i = 0; i <= 4; i++){
        arr1[i] = rand() % 100 + 1;
        arr2[i] = rand() % 100 + 1;
        printf("%d %d\n", arr1[i], arr2[i]);
    }*/
    
    
    min_arr1 = Min_Array(arr1);
    max_arr2 = Max_Array(arr2);

    printf("Arr1 Min Number: %d\n", min_arr1);
    printf("Arr2 Max Number: %d\n", max_arr2);

    return 0;
}