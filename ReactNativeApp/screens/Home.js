import React, {useState} from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import { Card } from 'react-native-paper';

function Home(props) {
    const [name, setName] = useState("DefaultName")
    return (
        <Card style={styles.cardStyle}>
        <Text style={{fontSize:25}}>
            {name}
        </Text>
        <Button title="Change text" onPress={()=>setName("Changed name")}/>
        </Card>
  )
}

const styles = StyleSheet.create({
    cardStyle: {
        padding:10,
        margin:10,
    }
})

export default Home
