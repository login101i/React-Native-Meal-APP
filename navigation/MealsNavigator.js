import React from 'react'
import { Platform, Text } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator, createTabNavigator } from 'react-navigation-tabs'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createAppContainer } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'


import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import FavouritesScreen from '../screens/FavouritesScreen'
import colors from '../constants/Colors'
import FiltersScreen from '../screens/FiltersScreen'


const defaultNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? 'purple' : 'red'
    },
    headerTitleStyle: {
        fontFamily: 'open-sans-bold'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : "Blue",


    headerBackTitleStyle: {
        fontFamily: 'opan-sans'
        , headerTintColor: Platform.OS === 'android' ? 'white' : 'purple'
    }

}

// _________________________________________________
const MealsNavigator = createStackNavigator({

    Categories: {
        screen: CategoriesScreen,
        navigationOptions: {
            headerTitle: 'Potrawy w McRestaurant',
        }
    },

    CategoryMeals: {
        screen: CategoryMealsScreen,
    },

    MealDetail: MealDetailScreen

}, {
    mode: 'modal',
    defaultNavigationOptions: defaultNavOptions

})
// _________________________________________________
const FavNavigator = createStackNavigator({
    Favourites: FavouritesScreen,
    MealDetail: MealDetailScreen

}, {
    defaultNavigationOptions: defaultNavOptions
})



// _________________________________________________



const tabScreenConfig = {
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: (tabInfo) => {
                return <Ionicons
                    name="ios-restaurant"
                    // color='white'
                    color={tabInfo.tintColor}
                    size={25}
                />

            },
            tabBarColor: "orange",
            tabBarLabel: Platform.OS === 'android' ? (<Text style={{ color: 'white' }}>Potrawy</Text>) : ''
        }

    },
    Favourites: {
        screen: FavNavigator,
        navigationOptions: {
            tabBarLabel: 'Ulubione',
            tabBarIcon: (tabInfo) => {
                return <Ionicons
                    name="ios-star"
                    // color='white'
                    color={tabInfo.tintColor}
                    size={25}
                />

            },
            tabBarColor: "purple"

        }
    }
}


const MealsFavTabNavigator = Platform.OS === 'android' ? createMaterialBottomTabNavigator(tabScreenConfig, {
    activeColor: 'white',
    activeTintColor: 'blue',
    shifting: true,
    barStyle: {
        backgroundColor: colors.purple
    }
})
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
            inactiveBackgroundColor: 'white',
            inactiveTintColor: 'green',
            activeTintColor: 'white',
            activeBackgroundColor: 'green',
            labelStyle: {
                fontFamily: 'open-sans'
            }

        },
    })

// _________________________________________________

const FiltersNavigator = createStackNavigator({
    Filters: FiltersScreen
}, {
    // navigationOptions: {
    //     drawerLabel: 'Filters!!!'
    // },
    defaultNavigationOptions: defaultNavOptions

})
// tylko po to aby był header 


// _________________________________________________

const MainNavigator = createDrawerNavigator({
    MealsFavs: {
        screen: MealsFavTabNavigator,
        navigationOptions: {
            drawerLabel: "Jedzonko"
        }
    },
    Filters: FiltersNavigator
}, {
    contentOptions: {
        activeTintColor: colors.grey,
        labelStyle: {
            fontFamily: 'open-sans-bold',

        }
    }
})


export default createAppContainer(MainNavigator)