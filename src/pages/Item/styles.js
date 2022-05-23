import styled from 'styled-components/native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'


export const Container = styled.View`
    flex: 1;
`


export const ImageContainer = styled.View`
    width: 100%;
    height: ${RFValue(320)}px;
    background-color: red;
    `

export const ImageBckg = styled.ImageBackground`
    width: 100%;
    height: 100%;
    `

export const OverImageContainer = styled.View`
    width: 100%;
    height: 100%;

    justify-content: space-between;

    padding:${RFValue(20)}px ${RFValue(30)}px ${RFValue(50)}px ${RFValue(30)}px;
    `

export const IconsTopContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
`

export const IconButton = styled.TouchableOpacity`
    margin: 0px 8px;
`

export const TitleContainer = styled.View`
    width: 70%;
`

export const Title = styled.Text`
    font-family:${(props) => props.theme.fonts.bold};
    font-size: ${RFValue(20)}px;
    color: ${(props) => props.theme.colors.white};
`

export const SubTitle = styled.Text`
    font-family:${(props) => props.theme.fonts.light};
    font-size: ${RFValue(10)}px;
    color: ${(props) => props.theme.colors.white};
`

export const DescriptionContainer = styled.View`
    background-color: ${(props) => props.theme.colors.primary};
    width: 100%;
    height: ${RFPercentage(62)}px;

    border-top-left-radius: 40px;
    border-top-right-radius: 40px;

    margin-top:${RFValue(-30)}px;
    padding: ${RFValue(33)}px;

    justify-content: space-between;
`
export const ScrollDescription = styled.ScrollView`
    
`

export const Adress = styled.Text`
    font-family:${(props) => props.theme.fonts.regular};
    font-size: ${RFValue(10)}px;
    color: ${(props) => props.theme.colors.white};
    width: 60%;
    margin-bottom: 20px;
`

export const Description = styled.Text`
    font-family:${(props) => props.theme.fonts.regular};
    font-size: ${RFValue(10)}px;
    color: ${(props) => props.theme.colors.white};
    width: 90%;
    margin-bottom: 20px;
`

export const IconsBottomContainer = styled.View`
    flex-direction: row;
    justify-content:center ;
    margin-top: ${RFValue(13)}px;
`
