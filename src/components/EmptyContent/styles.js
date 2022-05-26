import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
    flex: 1;
    background-color: ${(props) => props.theme.colors.white};
`

export const Waitingtext = styled.Text`
    align-self: center;
    font-size: ${RFValue(15)}px;
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.olive};
`