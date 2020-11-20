import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'

const MealsNavigator = createStackNavigator({

    Categories: {
        screen: CategoriesScreen,
        navigationOptions: {
            headerTitle:'Meals Categories',
        }
    },

    CategoryMeals: {
        screen: CategoryMealsScreen,
    },

    MealDetail: MealDetailScreen

},{
    mode:'modal',
    defaultNavigationOptions:{
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? 'green' : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : 'purple'
    }
})

export default createAppContainer(MealsNavigator)

