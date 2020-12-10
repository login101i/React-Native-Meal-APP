import React, { useState, useEffect, useCallback } from 'react'
import { Text, StyleSheet, View, Switch } from 'react-native'
import { useDispatch } from 'react-redux'

import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/CustomHeaderButton'
import Colors from '../constants/Colors'
import { setFilters } from '../store/actions/meals'
import DefaultText from '../components/DefaultText'



const FilterSwitch = props => {
    return (
        <View style={styles.filterContainer}>
            <DefaultText>{props.label}</DefaultText>
            <Switch
                value={props.state}
                onValueChange={props.onChange}
                trackColor={{ true: Colors.purple }}
                thumbColor='purple'
            />
        </View>
    )
}

const FiltersScreen = (props) => {


    const [isGlutenFree, setIsGlutenFree] = useState(false)
    const [isLactoseFree, setIsLactoseFree] = useState(false)
    const [isVegan, setIsVegan] = useState(false)
    const [isVegetarian, setIsVegetarian] = useState(false)


    const { navigation } = props


    const dispatch = useDispatch()

    const saveFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            vegetarian: isVegetarian
        }
        dispatch(setFilters(appliedFilters))
    }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian, dispatch])

    useEffect(() => {
        navigation.setParams({ save: saveFilters })
    }, [saveFilters, isGlutenFree])




    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Dostępne Filtry</Text>
            <FilterSwitch
                label="Gluten-free"
                state={isGlutenFree}
                onChange={newValue => {
                    setIsGlutenFree(newValue),
                        console.log("zmieniono tak")
                    saveFilters()
                    // jak dodać funkcję aby filtrowało od razu po kliknięciu switha

                }}
            />
            <FilterSwitch
                label="Lactose-free"
                state={isLactoseFree}
                onChange={newValue => setIsLactoseFree(newValue)}
            />
            <FilterSwitch
                label="Vegan"
                state={isVegan}
                onChange={newValue => setIsVegan(newValue)}
            />
            <FilterSwitch
                label="Vegetarian"
                state={isVegetarian}
                onChange={newValue => setIsVegetarian(newValue)}
            />
        </View>
    )
}

FiltersScreen.navigationOptions = navData => {


    return {

        headerTitle: "Filtr",
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
        ),
        headerRight: (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton} >
                <Item
                    title="Menu"
                    iconName="ios-save"
                    onPress={navData.navigation.getParam('save')}
                />
            </HeaderButtons>
        )
    }
}


const styles = StyleSheet.create({
    screen: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    filterContainer: {
        width: '80%',

        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginVertical: 10,

    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        margin: 20,
        textAlign: 'center'
    }
})

export default FiltersScreen