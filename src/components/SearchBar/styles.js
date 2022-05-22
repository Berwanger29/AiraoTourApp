import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'


export const Container = styled.View`
    background-color: ${(props) => props.theme.colors.white};
    width: 80%;
    height: ${RFValue(40)}px;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    padding-right: 18px;

    border-top-left-radius: 15px;
    border-bottom-right-radius: 15px;
`

export const Input = styled.TextInput`
    width: 88%;
    height: 100%;
    font-size: ${RFValue(12)}px;
    padding-left: 18px;
`