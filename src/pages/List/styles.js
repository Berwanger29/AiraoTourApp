import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
    flex: 1;
`
export const InputContainer = styled.View`
    
    align-items: center;
    margin-top: ${RFValue(-20)}px;
`

export const Waitingtext = styled.Text`
    align-self: center;
    font-size: ${RFValue(15)}px;
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.olive};
`