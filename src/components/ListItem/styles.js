import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
    flex: 1;
    
`

export const Optionslist = styled.FlatList`
    flex: 1;
    background-color: red;
    padding: 0px ${RFValue(30)}px;
`