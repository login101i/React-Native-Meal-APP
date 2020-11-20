import React from 'react'
import { Text, StyleSheet, View, Button, FlatList } from 'react-native'

import { CATEGORIES, MEALS } from '../data/dummy_data'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/CustomHeaderButton'



const MealDetailScreen = (props) => {


    const mealId = props.navigation.getParam('mealId')
    const selectedMeal = MEALS.find(meal => meal.id === mealId)
    console.log(selectedMeal)

    return (
        <View style={styles.screen}>
            <Text>{selectedMeal.title}</Text>
        </View>
    )
}


// ______________________________________________________________
MealDetailScreen.navigationOptions = (navigationData) => {
    const mealId = navigationData.navigation.getParam('mealId')
    const selectedMeal = MEALS.find(meal => meal.id === mealId)

    return {
        headerTitle: selectedMeal.title,
        headerRight: (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton} >
                <Item
                title="Favourite"
                iconName="ios-star"
                onPress={()=>{
                    console.log("Dodano do ulubionych")
                }}
                />
            </HeaderButtons>
            )
    }

}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default MealDetailScreen