import React, {useState} from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Card, FAB } from 'react-native-paper';

const mydata = [
    {id:1, title:"First title", description:"First description"},
    {id:2, title:"Second title", description:"Second description"},
    {id:2, title:"Third title", description:"Third description"},
]

const renderData = (item) => {
    return (
        <Card style={styles.cardStyle}>
            <Text style={{fontSize:25}}>{item.title}</Text>
            <Text style={{fontSize:20}}>{item.description}</Text>
        </Card>
    )
}

function Home(props) {
    return (
        <View>
        <FlatList
            data = {mydata}
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
        backgroundColor: 'blue',
    }
})

export default Home
