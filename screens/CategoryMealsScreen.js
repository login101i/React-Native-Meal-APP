import React from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'


import {CATEGORIES} from '../data/dummy_data'

const CategoryMealsScreen = (props) => {
   const cadId= props.navigation.getParam('categoryId')
    return (
        <View style={styles.screen}>
            <Text>Hello from CategoryMealsScreen</Text>
            <Button
                title="Go to details"
                onPress={() => {
                    props.navigation.navigate({ routeName: 'MealDetail' })
                }} />
        </View>
    )
}

CategoryMealsScreen.navigationOptions=(navigationData)=>{

    const catId=navigationData.navigation.getParam('categoryId')
  const selectedCategory=  CATEGORIES.find(item=>item.id===catId)

  return {
      headerTitle:selectedCategory.title
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