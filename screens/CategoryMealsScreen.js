import React from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'


import { CATEGORIES, MEALS } from '../data/dummy_data'
import MealItem from '../components/MealItem'

const CategoryMealsScreen = (props) => {
    const cadId = props.navigation.getParam('categoryId')

    const displayedMeal = MEALS.filter(meal => meal.categoryIds.indexOf(cadId) >= 0)
    console.log(displayedMeal)

    const renderMealItem = (itemData) => {
        return <MealItem
            onSelectMeal={() => {
                props.navigation.navigate({
                    routeName: 'MealDetail',
                    params: {mealId:itemData.item.id}
                })
            }}
            title={itemData.item.title}
            steps={itemData.item.steps}
            duration={itemData.item.duration}
            complexity={itemData.item.complexity}
            affordability={itemData.item.affordability}
            image={itemData.item.imageUrl}
        />
    }

    return (
        <View style={styles.screen}>
            <FlatList
                data={displayedMeal}
                keyExtractor={(item, index) => item.id}
                renderItem={renderMealItem}
                style={{ width: '90%' }}
            />
        </View>
    )
}





CategoryMealsScreen.navigationOptions = (navigationData) => {

    const catId = navigationData.navigation.getParam('categoryId')
    const selectedCategory = CATEGORIES.find(item => item.id === catId)

    return {
        headerTitle: selectedCategory.title,

    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CategoryMealsScreen