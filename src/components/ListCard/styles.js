import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const ButtonContainer = styled.TouchableOpacity`
    flex-direction: row;

    background-color: ${(props => props.theme.colors.primary)};
    height: ${RFValue(82)}px;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;

    margin-bottom: ${RFValue(16)}px;
`
export const ContainerCardImage = styled.View`
    height: 100%;
    width: ${RFValue(82)}px;
`

export const CardImage = styled.Image`
    width: 100%;
    height: 100%;
    border-top-left-radius: 20px;
`

export const InfoContainer = styled.View`

    padding: ${RFValue(16)}px ${RFValue(16)}px ${RFValue(8)}px ${RFValue(10)}px;
`

export const Title = styled.Text`
   font-family: ${(props) => props.theme.fonts.bold};
   font-size: ${RFValue(12)}px;
   color: ${(props) => props.theme.colors.white};
`

export const Preview = styled.Text`
    font-family: ${(props) => props.theme.fonts.light};
    font-size: ${RFValue(10)}px;
    color: ${(props) => props.theme.colors.white};

    margin: ${RFValue(8)}px 0px ${RFValue(8)}px 0px;
`

export const More = styled.Text`
    font-family: ${(props) => props.theme.fonts.regular};
    font-size: ${RFValue(10)}px;
    color: ${(props) => props.theme.colors.white};
`