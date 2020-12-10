import React, { useEffect, useCallback } from 'react'
import { Text, StyleSheet, Image, View, Button, FlatList, ScrollView } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { toggleFavorite } from '../store/actions/meals'


import { CATEGORIES } from '../data/dummy_data'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/CustomHeaderButton'
import DefaultText from '../components/DefaultText'
import Colors from '../constants/Colors'

const ListItem = props => {
    return (
        <View style={styles.listItem}>
            <DefaultText>{props.children}</DefaultText>
        </View>
    )
}

const MealDetailScreen = (props) => {

    const mealId = props.navigation.getParam('mealId')

    const selectedMeal = useSelector(state => state.meals.meals).find(meal => meal.id === mealId)

    const currentMealIsFavorite = useSelector(state=>state.meals.favoriteMeals.some(meal => meal.id === mealId))


    useEffect(() => {
        props.navigation.setParams({ isFav: currentMealIsFavorite })
    }, [currentMealIsFavorite])




    const dispatch = useDispatch()

    const toggleFavoritehandler = useCallback(() => {
        dispatch(toggleFavorite(mealId))
    }, [dispatch, mealId])


    useEffect(() => {
        props.navigation.setParams({ toggleFav: toggleFavoritehandler })
    }, [selectedMeal])



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
    // const mealId = navigationData.navigation.getParam('mealId')
    // const selectedMeal = MEALS.find(meal => meal.id === mealId)

    const toggleFavorite = navigationData.navigation.getParam('toggleFav')

    const mealTitle = navigationData.navigation.getParam('mealTitle')

    const isFavorite = navigationData.navigation.getParam('isFav')

    return {
        headerTitle: mealTitle,
        headerRight: (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton} >
                <Item
                    title="Favourite"
                    iconName={isFavorite?"ios-star":"ios-star-outline"}
                    onPress={toggleFavorite}
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
        backgroundColor:Colors.purple,
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