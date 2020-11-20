import React from 'react'


import { CATEGORIES, MEALS } from '../data/dummy_data'
import MealList from '../components/MealList'

const CategoryMealsScreen = (props) => {
    const cadId = props.navigation.getParam('categoryId')

    const displayedMeal = MEALS.filter(meal => meal.categoryIds.indexOf(cadId) >= 0)
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