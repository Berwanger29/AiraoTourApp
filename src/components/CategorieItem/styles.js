import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const CardContainer = styled.View`
    background-color: green;
    width: ${RFValue(114)}px;
    height: ${RFValue(112)}px;
    align-items: center;
    justify-content: center;
    margin-left: ${RFValue()};
`

export const Label = styled.Text`
    font-family: ${(props) => props.theme.fonts.regular};
`