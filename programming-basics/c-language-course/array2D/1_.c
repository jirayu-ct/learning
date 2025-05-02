#include <stdio.h>

int main(int argc, char *argv[]){

    int arr[3][3] = {10, 20 ,30, 40, 50, 60, 70, 80, 90};
    int i = 0;
    int j = 0;
    int counter = 0;
    int result = 0;

    
    arr[0][2] = 99;
    arr[1][1] = 99;
    arr[2][0] = 99;

    for(i = 0; i < 4; i++){
        for(j = 0; j < 3; j++){
            if(i<3){
                arr[3][j] += arr[i][j];
            }
            printf("%d\t", arr[i][j]);
        }
        printf("\n");
    }

    /*for(i = 0; i < 3; i++){
        result = 0;
        for(j = 0; j < 3; j++){
            result += arr[j][i];
        }
        printf("%d ", result);
    }
    printf("\n");*/
    //printf("Number Array 99: %d \n", counter);

    return 0;
}