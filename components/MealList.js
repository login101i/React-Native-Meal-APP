import React from 'react'
import { StyleSheet, Text, View, FlatList} from 'react-native'
import {useSelector} from 'react-redux'

import MealItem from './MealItem'

export default function MealList(props) {

    const favoriteMeals=useSelector(state=>state.meals.favoriteMeals)

    const renderMealItem = (itemData) => {
        const isFavorite=favoriteMeals.find(meal=>meal.id===itemData.item.id)
        return <MealItem
            onSelectMeal={() => {
                props.navigation.navigate({
                    routeName: 'MealDetail',
                    params: {
                         mealId: itemData.item.id,
                         mealTitle:itemData.item.title,
                         isFav:isFavorite
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
                data={props.listData}
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
        alignItems: 'center'
    }
})
