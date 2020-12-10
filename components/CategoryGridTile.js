import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Platform,
    TouchableNativeFeedback
}
    from 'react-native'

export default function CategoryGridTile(props) {

    let TouchableCmp = TouchableOpacity
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback
    }

    return (
        <View style={styles.gridItem}>
            <TouchableCmp
                onPress={props.onSelect}>
                <View style={{ ...styles.container, ...{ backgroundColor: props.color } }}>
                    <Text
                        style={styles.title}
                        numberOfLines={2}
                    >{props.title}
                    </Text>
                </View>
            </TouchableCmp>
        </View>


    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        padding: 10,
        height: 200,
        width: '100%',
    },

    gridItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 'auto',
        height: 152,
        borderWidth: 2,
        borderColor: 'grey',
        borderRadius: 18,
        margin: 10,
        overflow: 'hidden',
        elevation:12,
    },
    
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'right',
        color:'#111',
        fontWeight:"600",
    }
})

