import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/CustomHeaderButton'



const FiltersScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>Hello from FilterScreen</Text>
        </View>
    )
}

FiltersScreen.navigationOptions = navData => {
    return {

        headerTitle: "Filterek",
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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default FiltersScreen