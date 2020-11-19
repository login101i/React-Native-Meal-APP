import React from 'react'
import { Text, StyleSheet, View, Button, FlatList, TouchableOpacity, Platform } from 'react-native'



import { CATEGORIES } from '../data/dummy_data'
import Colors from '../constants/Colors'




const CategoriesScreen = (props) => {

    const renderGridItem = (itemData) => {

        return <TouchableOpacity style={styles.gridItem}
            onPress={() => { props.navigation.navigate({ routeName: 'CategoryMeals', params:{categoryId:itemData.item.id} }) }}>

            <View >
                <Text>{itemData.item.title}</Text>
            </View>
        </TouchableOpacity>

    }
// _______________________________________________
    return (

        <FlatList numColumns={2}
            data={CATEGORIES}
            keyExtractor={(item, index) => item.id}
            renderItem={renderGridItem}
            props={props}
        />
    )
}

CategoriesScreen.navigationOptions={
    headerTitle:'Meal Categories',
    headerStyle:{
        backgroundColor:Platform.OS==='android'?'purple' :''
    },
    headerTintColor:Platform.OS==='android'?'white':'purple'
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 11,
        margin: 10,


    },
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    }
})

export default CategoriesScreen