import React from 'react'

import { Text, View, StyleSheet } from 'react-native'

import MealItem from '../components/MealItem'
import MealList from '../components/MealList'
import { useSelector } from 'react-redux'
import DefaultText from '../components/DefaultText'


import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/CustomHeaderButton'


const FavouritesScreen = (props) => {

    const favMeals = useSelector(state => state.meals.favoriteMeals)

    if (favMeals.length === 0 || !favMeals) {
        return (
            <View style={styles.text}>
                <DefaultText> Nie masz ulubionych produktów na ten moment.</DefaultText>
            </View>
        )
    }

    return (
        <MealList
            listData={favMeals}
            navigation={props.navigation}
        />
    )
}


FavouritesScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Twoje ulubione',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton} >
                <Item
                    title="Menu"
                    iconName="ios-menu"
                    onPress={() => {
                        navData.navigation.toggleDrawer()
                    }}
                />
            </HeaderButtons>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        padding:20,
     
    }
})



export default FavouritesScreen