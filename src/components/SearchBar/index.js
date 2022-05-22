import React from 'react'
import {
    View,
    StyleSheet
} from 'react-native'

import {
    Container,
    Input
} from './styles'

import { MaterialIcons } from '@expo/vector-icons';
import theme from '../../global/theme';
import { RFValue } from 'react-native-responsive-fontsize';


const SearchBar = () => {
    return (
        <Container style={styles.shadow}>
            <Input
                placeholder="O que gostaria de pesquisar ?"
            />

            <MaterialIcons name="search" size={RFValue(24)} color={theme.colors.primary} />
        </Container>
    )
}

const styles = StyleSheet.create({
    shadow: {
        elevation: 3,
        
    }
})

export default SearchBar