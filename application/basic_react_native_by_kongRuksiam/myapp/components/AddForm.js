import { Button, Text, TextInput, View } from "react-native"
import { myStyles } from "../styles/myStyle"
import { useState } from "react"

const AddForm = ({addData}) => {

    const [name, setName] = useState('')
    const [age, setAge] = useState('')

    return (
        <View>

            <TextInput
                placeholder="ชื่อ"
                keyboardType="default"
                style={myStyles.textInput}
                onChangeText={(value) => setName(value)}
            />
            <TextInput
                placeholder="อายุ"
                keyboardType="number-pad"
                style={myStyles.textInput}
                onChangeText={(value) => setAge(value)}
            />

            <Button title="เพิ่มข้อมูล" onPress={() => addData(name, age) } />
        </View>
    )
}
export default AddForm