import React from 'react'
import { Text, StyleSheet, Image, View, Button, FlatList, ScrollView } from 'react-native'

import { CATEGORIES, MEALS } from '../data/dummy_data'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/CustomHeaderButton'
import DefaultText from '../components/DefaultText'

const ListItem = props => {
    return (
        <View style={styles.listItem}>
            <DefaultText>{props.children}</DefaultText>
        </View>
    )
}

const MealDetailScreen = (props) => {

    const mealId = props.navigation.getParam('mealId')
    const selectedMeal = MEALS.find(meal => meal.id === mealId)
    console.log(selectedMeal)

    return (
        <>
            <ScrollView>


                <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
                <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
                    <DefaultText>{selectedMeal.duration} min</DefaultText>
                    <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
                    <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>

                </View>
                <Text style={styles.title}>Ingredients</Text>
                {selectedMeal.ingredients.map(ingredient => (
                    <ListItem key={ingredient}>{ingredient}</ListItem>
                ))}

                <Text style={styles.title}>Steps</Text>
                {selectedMeal.steps.map(step => (
                    <ListItem key={step}>{step}</ListItem>
                ))}
            </ScrollView>
        </>
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
                    onPress={() => {
                        console.log("Dodano do ulubionych")
                    }}
                />
            </HeaderButtons>
        )
    }

}

const styles = StyleSheet.create({

    image: {
        width: '100%',
        height: 222,
    },
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    mealDetail: {
        justifyContent: 'space-between',
        padding: 5,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        paddingHorizontal: 20,
        fontFamily: 'open-sans-bold',
        flexDirection: 'row',
    },
    mealRow: {
        flexDirection: 'row',
        width: '100%',
    },
    title: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'open-sans-bold',
        padding: 11,
        backgroundColor: 'rgba(0,0,0,0.6)',
        textAlign: 'center'
    },
    listItem: {
        marginHorizontal: 20,
        marginVertical: 0,
        borderColor: '#ccc',
        padding: 5
    }
})

export default MealDetailScreen