#include <stdio.h>
#include <stdlib.h>

float BMI(float weight, float height){
    float bmi;
    
    height /= 100;
    bmi = weight/(height*height);
    
    return bmi;
}

int main(int argc, char *argv[]) {
    float weight, height, bmi;
    
    weight = atoi(argv[1]);
    height = atoi(argv[2]);
    
    bmi = BMI(weight, height);
    
    if(bmi > 30){
        printf("bmi = %.2f : very fat\n", bmi);
    }
    else if(bmi >= 25){
        printf("bmi = %.2f : fat\n", bmi);
    }
    else if(bmi >= 18.6){
        printf("bmi = %.2f : normal\n", bmi);
    }
    else{
        printf("bmi = %.2f : thin\n", bmi);
    }
    
    printf("%d", argc);

    return 0;
}