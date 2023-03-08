import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, FlatList, Alert } from 'react-native';
import { Card, FAB } from 'react-native-paper';


function Home(props) {
    
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('http://192.168.1.83:8000/api/articles/', {
            method:"GET"
        })
        .then(response => response.json())
        .then(json => {
            setData(json)
        })
        .catch(error => Alert.alert("error", error))
    }, [])

    const renderData = (item) => {
        return (
            <Card style={styles.cardStyle}>
                <Text style={{fontSize:25}}>{item.title}</Text>
            </Card>
        )
    }

    return (
        <View style = {{flex:1}}>
        <FlatList
            data = {data}
            renderItem = {({item}) => {
                return renderData(item)
            }}
            keyExtractor = {item => item.id}
        />
        <FAB
            style = {styles.fab}
            small = {false}
            icon = "plus"
            theme = {{colors:{accent:"blue"}}}
            onPress = {() => console.log("pressed")}
        />
        </View>
  )
}

const styles = StyleSheet.create({
    cardStyle: {
        padding:10,
        margin:10,
    },

    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        backgroundColor: 'cyan',
    }
})

export default Home
