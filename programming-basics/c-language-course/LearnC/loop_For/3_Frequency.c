#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[]){

    int i = 0;
    for(i = (-500); i <= 500; i += atoi(argv[1])){
        printf("%d\n", i);
    }

    return 0;
}