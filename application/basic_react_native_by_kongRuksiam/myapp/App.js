import { useState } from 'react';
import { Alert, Text, View } from 'react-native';
import { myStyles } from './styles/myStyle';
import Person from './components/Person';
import AddForm from './components/AddForm';

const App = () => {
  const [data, setData] = useState([
    { id: 1, name: 'John Doe', age: 25 },
    { id: 2, name: 'Jane Smith', age: 30 },
    { id: 3, name: 'Sam Brown', age: 22 },
    { id: 4, name: 'Lisa White', age: 28 },
    { id: 5, name: 'Tom Green', age: 35 }
  ])

  const deleteData = (id_) => {
    setData((prevData) => prevData.filter(item => item.id !== id_))
  }

  const addData = (name, age) => {
    if (name) {
      setData([
        ...data,
        {
          id: data.length + 1,
          name: name,
          age: age
        }
      ])
    }
    else {
      Alert.alert('แจ้งเตือน', 'กรุณากรอกชื่อ')
    }
  }

  return (
    <View style={myStyles.container}>
      <View>

        <Text style={{ alignSelf: 'center', fontSize: 30, fontWeight: 'bold', marginBottom: 10 }}>ข้อมูลประชากร</Text>

        {
          data.length === 0
            ? <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontSize: 25, fontWeight: 'bold' }}>No data...</Text>
            </View>
            : data.map((item, index) => <Person key={index} id={item.id} name={item.name} age={item.age} deleteData={deleteData} />)
        }
      </View>

      <AddForm addData={addData} />
    </View>
  )
}

export default App