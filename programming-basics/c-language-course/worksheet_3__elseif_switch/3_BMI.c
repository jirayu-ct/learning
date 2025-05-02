#include <stdio.h>

int main() {
    
    float weight, height, BMI;
    
    printf("Press Input Weight(g.): ");
    scanf("%f", &weight);
    
    printf("Press Input Height(cm.): ");
    scanf("%f", &height);
    
    height /= 100;
    BMI = weight/(height*height);
    
    if(BMI<18.5){
        printf("BMI = %.2f :น้ำหนักต่ำกว่าเกณฑ์", BMI);
    }
    else if(BMI<22.9){
        printf("BMI = %.2f :น้ำหนักสมส่วน", BMI);
    }
    else if(BMI<24.9){
        printf("BMI = %.2f :น้ำหนักเกินมาตรฐาน", BMI);
    }
    else if(BMI<29.9){
        printf("BMI = %.2f :อ้วน", BMI);
    }
    else{
        printf("BMI = %.2f :อ้วนมาก", BMI);
    }

    return 0;
}
