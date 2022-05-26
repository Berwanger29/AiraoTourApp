import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
    height: ${RFValue(50)}px;
    width: ${RFValue(50)}px;
    border-radius: ${RFValue(25)}px;
    background-color: ${(props) => props.theme.colors.primary};
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    
`

