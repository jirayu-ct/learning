#include <stdio.h>


int Room_cate(int room_cate);
int Electric();
int Water();
int Show_bill();


char month[10] = "";
char *room_cate_Char[10];
int room_num = 0;
int room_cate = 0;
int rent = 0;
int total = 0;
int check_meter_num = 0;
//ค่าไฟ
int electric = 0;
int electric_before = 0;
int electric_after = 0;
int electric_unit = 6;
//ค่าน้ำ
int water = 0;
int water_before = 0;
int water_after = 0;
int water_unit = 20;


int Room_cate(int room_cate){
    while(1){
        if(room_cate == 1){
            return 4000;
            break;
        }
        else if(room_cate == 2){
            return 2500;
            break;
        }
        else{
            printf("ERORR: Room category must be 1 or 2 only.\n");
            printf("Room cate: ");
            scanf("%d", &room_cate);
        }
    }
}

int Electric(){
    printf("Enter Electric Before: ");
    scanf("%d", &electric_before);

    printf("Enter Electric After: ");
    scanf("%d", &electric_after);

    while(1){
        if (electric_before > electric_after){
            printf("ERORR: The previous meter number must be less than the latest.\n");

            printf("Enter Again Electric Before: ");
            scanf("%d", &electric_before);

            printf("Enter Again Electric After: ");
            scanf("%d", &electric_after);

            if(electric_before < electric_after){   // คำนวณค่าไฟ
                return (electric_after - electric_before) * electric_unit;
                break;
            }
        }
        else{
            return (electric_after - electric_before) * electric_unit;
            break;
        }
    }
}

int Water(){
    printf("Enter water Before: ");
    scanf("%d", &water_before);

    printf("Enter water After: ");
    scanf("%d", &water_after);

    while (1){
        if (water_before > water_after){
            printf("ERORR: The previous meter number must be less than the latest.\n");

            printf("Enter Again water Before: ");
            scanf("%d", &water_before);

            printf("Enter Again water After: ");
            scanf("%d", &water_after);

            if (water_before < water_after)
            {   // คำนวณค่าไฟ
                return (water_after - water_before) * water_unit;
                break;
            }
        }
        else{
            return (electric_after - electric_before) * electric_unit;
            break;
        }
    }
}

int Show_bill(){
    printf("---------------Room invoice----------------\n");
    printf("Month %s\t\t\t", month);
    printf("Room Number: %d\n", room_num);

    printf("Room category: %s\t", room_cate_Char[5]);
    printf("Rent %d Bath\n", rent);

    printf("Electric: %d Bath\t", electric);
    printf("Water %d Bath\n", water);

    printf("Electric Before: %d Bath\t", electric_before);
    printf("Water Before: %d Bath\n", water_before);

    printf("Electric After: %d Bath\t", electric_after);
    printf("Water After: %d Bath\n", water_after);

    printf("Electric Unit: %d Bath\t", electric_unit);
    printf("Water Unit: %d Bath\n", water_unit);

    printf("Total: %d Bath\n", total);
    printf("_____________________________________________\n");
}

int main(int argc, char *argv[]){
    int i = 0;

    for(i = 1; i <= 20; i++){
        printf("Month: ");
        scanf("%s", &month);

        printf("Room Number: ");
        scanf("%d", &room_num);

        printf("Room cate: ");
        scanf("%d", &room_cate);
        //EROOR Trap
        rent = Room_cate(room_cate);

        if(room_cate == 1){
            room_cate_Char[5] = "Air";
        }
        else{
            room_cate_Char[5] = "Fan";
        }

        electric = Electric();
        water = Water();

        total = electric + water + rent;

        Show_bill();
        printf("Done!!. Please enter the next room.\n");
    }
    printf("Done!!. You have completed it. \n:)");

    return 0;
}