import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
    align-items: center;
    margin: ${RFValue(26)}px 0px;
`

export const Title = styled.Text`
    font-family: ${(props) => props.theme.fonts.light};
    font-size: ${RFValue(15)}px;
    color: ${(props) => props.theme.colors.primary};
`