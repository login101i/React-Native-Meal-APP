import React from 'react'
import { Text, StyleSheet, View, Button, FlatList, TouchableOpacity, Platform } from 'react-native'



import { CATEGORIES } from '../data/dummy_data'
import CategoryGridTile from '../components/CategoryGridTile'


const CategoriesScreen = (props) => {

    const renderGridItem = (itemData) => {
        return <CategoryGridTile
            title={itemData.item.title}
            color={itemData.item.color}
            onSelect={() => {
                props.navigation.navigate({
                    routeName: 'CategoryMeals',
                    params: { categoryId: itemData.item.id }
                })
            }}
        />
    }

    // _______________________________________________

    return (

        <View style={styles.screen}>

            <FlatList numColumns={2}
                data={CATEGORIES}
                keyExtractor={(item, index) => item.id}
                renderItem={renderGridItem}
                props={props}
            />

        </View>

    )
}



const styles = StyleSheet.create({
screen:{
    backgroundColor:'white'
}
})

export default CategoriesScreen