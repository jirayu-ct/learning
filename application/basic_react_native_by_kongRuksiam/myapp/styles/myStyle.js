import { StyleSheet } from "react-native";

export const myStyles = StyleSheet.create({
    container: {
        flex: 1,
        // margin: 50,
        marginVertical: 50, //บน ล่าง
        marginHorizontal: 10, //ซ้าย ขวา
        justifyContent: 'space-between'
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    content: {
        backgroundColor: 'orange',
        padding: 25,
        marginBottom: 5,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: 'black'
    },
    image: {
        width: 300,
        height: 300
    },
    textInput: {
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginBottom: 10
    },
})

