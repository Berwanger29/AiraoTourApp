import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
    flex: 1;
    width: 100%;
`

export const Lista = styled.FlatList`
    padding: 0px ${RFValue(30)}px;
    
`