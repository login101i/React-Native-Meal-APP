import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

import { HeaderButton } from 'react-navigation-header-buttons'
import { Ionicons } from '@expo/vector-icons'



const CustomHeaderButton = props => {
    return (
        <HeaderButton
            {...props}
            IconComponent={Ionicons}
            size={38}
            color='red'
        />

    )
}

const styles = StyleSheet.create({

})

export default CustomHeaderButton


