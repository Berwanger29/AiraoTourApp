import styled from 'styled-components/native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

export const CardContainer = styled.View`
    background-color: ${(props) => props.theme.colors.primary};
    width: ${RFPercentage(18.5)}px;
    height: ${RFPercentage(16)}px;
    align-items: center;
    justify-content: center;
    margin-right: ${RFValue(30)}px;
    margin-bottom: ${RFValue(17)}px;
    border-radius: 5px;
`

export const Label = styled.Text`
    font-family: ${(props) => props.theme.fonts.regular};
    font-size: ${RFValue(10)}px;
    color: ${(props) => props.theme.colors.white} ;
`