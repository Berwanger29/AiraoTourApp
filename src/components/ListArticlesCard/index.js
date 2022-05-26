import React from 'react'
import {
    ButtonContainer,
    CardImage,
    ContainerCardImage,
    Preview,
    InfoContainer,
    More,
    Title,
} from './styles'

import { useNavigation } from '@react-navigation/native'

const ListArticlesCard = ({ title, preview, description, image, authorImage }) => {


    const navigation = useNavigation()
    function handleSelectedCard() {
        navigation.navigate('ArticlePage', {
            title,
            preview,
            description,
            image,
            authorImage
        })
    }


    return (
        <ButtonContainer
            style={{ elevation: 5 }}
            activeOpacity={0.5}
            onPress={() => handleSelectedCard()}
        >

            <ContainerCardImage>
                <CardImage
                    source={{uri:image}}
                    imageStyle={{ borderTopLeftRadius: 20 }}
                />
            </ContainerCardImage>

            <InfoContainer>
                <Title>
                    {title}
                </Title>
                <Preview>
                    {preview}
                </Preview>
                <More>
                    Saiba mais
                </More>
            </InfoContainer >
        </ButtonContainer>
    )
}

export default ListArticlesCard