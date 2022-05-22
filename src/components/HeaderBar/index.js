import React from 'react'

import {
    Container,
    IconsContainer,
    InputContainer,
} from './styles'

import SearchBar from '../SearchBar';
import LogoWhite from '../../../assets/svgComponents/LogoWhite'
import { MaterialIcons } from '@expo/vector-icons';
import theme from '../../global/theme';



const HeaderBar = () => {
    return (
        <Container>
            <IconsContainer>
                <LogoWhite />

                <MaterialIcons name="menu" size={24} color={theme.colors.white} />
            </IconsContainer>
            <InputContainer>
                
            </InputContainer>
        </Container>
    )
}



export default HeaderBar