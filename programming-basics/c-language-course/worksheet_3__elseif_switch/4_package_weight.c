#include <stdio.h>

int main() {
    int weight;
    
    printf("Press Input Wright(g.): ");
    scanf("%d", &weight);
    
    if (weight<=100){
        printf("Price: 18 Baht");
    }
    else if (weight<=250){
        printf("Price: 22 Baht");
    }
    else if (weight<=500){
        printf("Price: 28 Baht");
    }
    else if (weight<=1000){
        printf("Price: 38 Baht");
    }
    else if (weight<=2000){
        printf("Price: 58 Baht");
    }
    else{
        printf("น้ำหนักเกิน 2000 กรัม ไม่สามารถลงทะเบียนได้");
    }

    return 0;
}
