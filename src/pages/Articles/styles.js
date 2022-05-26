import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
    flex: 1;
    background-color: ${(props) => props.theme.colors.white};
`

export const InputContainer = styled.View`
    align-items: center;
    margin-top: ${RFValue(-20)}px;
`

export const ArticlesContainer = styled.View`
    flex: 1;
    padding-top: ${RFValue(20)}px;
`