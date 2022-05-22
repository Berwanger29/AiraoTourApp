import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'



export const Container = styled.View`
    flex:1;
`


export const ContainerBackgroundImg = styled.ImageBackground`
    flex: 1;
    width: 100%;
`
export const Filter = styled.View`
    flex:1;
    width: 100%;
    background-color: rgba(0,0,0,0.2);
    align-items: center;
    justify-content: space-between;
    padding:30px 30px ${RFValue(80)}px 30px;
`

export const ContentContainer = styled.View`
    
`

export const Title = styled.Text`
    font-family: ${(props) => props.theme.fonts.bold};
    font-size: ${RFValue(24)}px;
    color:${(props) => props.theme.colors.white};
`

export const Texto = styled.Text`
    font-family: ${(props) => props.theme.fonts.light};
    font-size: ${RFValue(12)}px;
    
    color:${(props) => props.theme.colors.white};
    margin: ${RFValue(13)}px 0;
`

export const Button = styled.TouchableOpacity`
    width: ${RFValue(120)}px;
    background-color: ${(props) => props.theme.colors.white};
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    padding:${RFValue(11)}px  ${RFValue(25)}px ;
`

export const ButtonText = styled.Text`
    font-family: ${(props) => props.theme.fonts.bold};
    font-size: ${RFValue(12)}px;
    color:${(props) => props.theme.colors.primary};
`