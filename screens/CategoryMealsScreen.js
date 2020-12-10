import React from 'react'
import { View, StyleSheet, Text, FlatList } from 'react-native'
import {useSelector} from 'react-redux'
import DefaultText from '../components/DefaultText'




import { CATEGORIES } from '../data/dummy_data'
import MealItem from '../components/MealItem'


const CategoryMealsScreen = (props) => {
    const cadId = props.navigation.getParam('categoryId')

    const availableMeals=useSelector(state=>state.meals.filteredMeals)

    const displayedMeal = availableMeals.filter(meal => meal.categoryIds.indexOf(cadId) >= 0)
    console.log(displayedMeal)

   if(displayedMeal.length===0){
       return (
           <View style={styles.text}>
               <DefaultText> Nie ma potraw z takimi ustawionymi filtrami.</DefaultText>
           </View>
       )
   }


    const favoriteMeals = useSelector(state => state.meals.favoriteMeals)

    const renderMealItem = (itemData) => {
        const isFavorite = favoriteMeals.find(meal => meal.id === itemData.item.id)
        return <MealItem
            onSelectMeal={() => {
                props.navigation.navigate({
                    routeName: 'MealDetail',
                    params: {
                        mealId: itemData.item.id,
                        mealTitle: itemData.item.title,
                        isFav: isFavorite
                    }
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
        <View style={styles.list}>
            <FlatList
                data={displayedMeal}
                keyExtractor={(item, index) => item.id}
                renderItem={renderMealItem}
                style={{ width: '90%' }}
            />
        </View>
    )
}




const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 7,

    }
})




CategoryMealsScreen.navigationOptions = (navigationData) => {

    const catId = navigationData.navigation.getParam('categoryId')
    const selectedCategory = CATEGORIES.find(item => item.id === catId)

    return {
        headerTitle: selectedCategory.title,

    }
}

export default CategoryMealsScreen