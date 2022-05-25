import React from 'react'

import {
    ButtonContainer,
    Container,
    IconsContainer,
} from './styles'

import LogoWhite from '../../../assets/svgComponents/LogoWhite'
import { MaterialIcons } from '@expo/vector-icons';
import theme from '../../global/theme';

import { useNavigation } from '@react-navigation/native';



const HeaderBar = () => {

    const navigation = useNavigation();
    function drawerMenu() {
        navigation.openDrawer()
    }

    return (
        <Container>
            <IconsContainer>
                <LogoWhite />

                <ButtonContainer
                    activeOpacity={0.5}
                    onPress={() => drawerMenu()}
                >
                    <MaterialIcons name="menu" size={24} color={theme.colors.white} />
                </ButtonContainer>
            </IconsContainer>
        </Container>
    )
}



export default HeaderBar