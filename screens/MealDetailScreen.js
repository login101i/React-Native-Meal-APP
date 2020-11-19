import React from 'react'
import { Text, StyleSheet, View, Button} from 'react-native'



const MealDetailScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>Hello from MealDetailScreen</Text>
            <Button title="go to categories"
            onPress={()=>props.navigation.popToTop()}
            />
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

export default MealDetailScreen