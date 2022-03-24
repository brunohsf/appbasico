import React, { Component } from 'react';
import { Text, View, Button, StyleSheet, Image } from 'react-native';




export default function Home({ navigation }) {

    const styles = StyleSheet.create({
        container: {
            paddingTop: 50,
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: 'center'
        },
        image: {
            width: 100,
            height: 100
        },
        
    })

    return (
        <View style={styles.container}>
            {/* <Text>Home</Text> */}
            <Image styles={styles.image}
                source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
            />
            <Button title="Go to Searh Page" onPress={() => navigation.navigate('Search')} />
        </View>
    )

}