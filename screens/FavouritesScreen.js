import React from 'react'

import { Text } from 'react-native'

import MealItem from '../components/MealItem'
import { MEALS } from '../data/dummy_data'
import MealList from '../components/MealList'


import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/CustomHeaderButton'


const FavouritesScreen = (props) => {

    const dummyData = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2')

    return (
        <MealList
            listData={dummyData}
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




export default FavouritesScreen