import React from 'react'
import { Text, StyleSheet, View } from 'react-native'



const FavouritesScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>Hello from FilterScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default FavouritesScreen