import styled from 'styled-components/native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

export const CardContainer = styled.TouchableOpacity`
    background-color: ${(props) => props.theme.colors.primary};
    width: ${RFPercentage(18.5)}px;
    height: ${RFPercentage(16)}px;

    margin-right: ${RFValue(30)}px;
    margin-bottom: ${RFValue(17)}px;
    border-radius: 5px;
`

export const ImageBackground = styled.ImageBackground`
    flex: 1;
`

export const FilterContainer = styled.View`
    background-color: rgba(0,0,0,0.3);
    flex: 1;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
`

export const Label = styled.Text`
    font-family: ${(props) => props.theme.fonts.regular};
    font-size: ${RFValue(10)}px;
    color: ${(props) => props.theme.colors.white} ;
    margin-top: 5px;
`