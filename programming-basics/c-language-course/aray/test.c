#include <stdio.h>
#include <stdlib.h>

float BMI(float weight, float height){
    float bmi;
    
    height /= 100;
    bmi = weight/(height*height);
    
    return bmi;
}

int main(int argc, char *argv[]) {
    float bmi;
    
    
    bmi = BMI(atoi(argv[1]), atoi(argv[2]));
    
    if(bmi > 30){
        printf("bmi = %.2f : very fat", bmi);
    }
    else if(bmi >= 25){
        printf("bmi = %.2f : fat", bmi);
    }
    else if(bmi >= 18.6){
        printf("bmi = %.2f : normal", bmi);
    }
    else{
        printf("bmi = %.2f : thin", bmi);
    }
    

    return 0;
}