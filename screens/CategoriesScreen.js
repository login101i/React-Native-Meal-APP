import React from 'react'
import { Text, StyleSheet, View, Button, FlatList, TouchableOpacity, Platform } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'


import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/CustomHeaderButton'



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
            <LinearGradient
                colors={['#AC33C8', '#ff4433']}
                style={styles.linearGradient}
            >

                <FlatList numColumns={2}
                    data={CATEGORIES}
                    keyExtractor={(item, index) => item.id}
                    renderItem={renderGridItem}
                    props={props}
                />
            </LinearGradient>

        </View>

    )
}


CategoriesScreen.navigationOptions = navData => {
    return {


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


const styles = StyleSheet.create({
    screen: {
        backgroundColor: 'white'
    },
    

})

export default CategoriesScreen