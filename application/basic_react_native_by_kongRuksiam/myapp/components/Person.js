import { Text, View, TouchableOpacity } from 'react-native';
import { myStyles } from '../styles/myStyle';

const Person = ({ id, name, age, deleteData }) => {
    return (
        <TouchableOpacity onPress={() => deleteData(id)}>

            <View style={myStyles.content}>
                <Text style={myStyles.header}>id: {id} ชื่อ: {name}, อายุ: {age}</Text>
            </View>
        </TouchableOpacity>
    )
}
export default Person