import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
    width: 100%;
    height: ${RFValue(131)}px;
    background-color: ${(props) => props.theme.colors.primary};
    padding: ${RFValue(20)}px ${RFValue(30)}px;
    align-items: center;
`
export const IconsContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`

export const InputContainer = styled.View`
    padding-top: ${RFValue(62.5)}px;
`