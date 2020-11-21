import React from 'react'
import {useSelector} from 'react-redux'


import { CATEGORIES } from '../data/dummy_data'
import MealList from '../components/MealList'

const CategoryMealsScreen = (props) => {
    const cadId = props.navigation.getParam('categoryId')

    const availableMeals=useSelector(state=>state.meals.filteredMeals)

    const displayedMeal = availableMeals.filter(meal => meal.categoryIds.indexOf(cadId) >= 0)
    console.log(displayedMeal)

   

    return (
    <MealList
    listData={displayedMeal}
    navigation={props.navigation}
    />
    )
}





CategoryMealsScreen.navigationOptions = (navigationData) => {

    const catId = navigationData.navigation.getParam('categoryId')
    const selectedCategory = CATEGORIES.find(item => item.id === catId)

    return {
        headerTitle: selectedCategory.title,

    }
}

export default CategoryMealsScreen