import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const ButtonContainer = styled.View`
    background-color: green;
    height: ${RFValue(82)}px;
`


export const Title = styled.Text`
   font-family: ${(props) => props.theme.fonts.bold};
   font-size: ${RFValue(12)}px;
   color: ${(props) => props.theme.colors.white};
`

export const Description = styled.Text`
    font-family: ${(props) => props.theme.fonts.light};
    font-size: ${RFValue(10)}px;
    color: ${(props) => props.theme.colors.white};
`