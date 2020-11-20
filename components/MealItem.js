import React from 'react'
import { StyleSheet, Text, View, TouchableNativeFeedback, ImageBackground } from 'react-native'

export default function MealItem(props) {
    return (
        <View style={styles.container}>
            <TouchableNativeFeedback
                onPress={props.onSelectMeal}
            >
                <View style={{ width: '100%' }}>
                    <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
                        <ImageBackground
                            source={{ uri: props.image }}
                            style={styles.bgImage}
                        >
                            <Text
                                style={styles.title}
                            // numberOfLines={1}
                            >{props.title}</Text>
                        </ImageBackground>
                    </View>
                    <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
                        <Text>{props.duration} min</Text>
                        <Text>{props.complexity.toUpperCase()}</Text>
                        <Text>{props.affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </TouchableNativeFeedback>


        </View>
    )
}

const styles = StyleSheet.create({
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },

    container: {
        width: '100%',
        height: 290,
        borderWidth: 2,
        borderColor: 'grey',
        backgroundColor: '#fff',
        alignItems: 'center',
        marginVertical: 10,
        borderRadius:20,
        overflow:'hidden'
    },
    mealHeader: {
        backgroundColor: '#c8c8c8',
        width: '100%',
        height: '85%'

    },
    mealDetail: {
        justifyContent: 'space-between',
        padding: 5,
        backgroundColor: '#f5f5f5',
        height: '15%',
        alignItems: 'center',
        paddingHorizontal:20,
        fontFamily:'open-sans-bold'
    },
    
    mealRow: {
        flexDirection: 'row',
        width: '100%',
    },
    title: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'open-sans-bold',
        padding: 11,
        backgroundColor: 'rgba(0,0,0,0.6)',
        textAlign: 'center'
    }
})
