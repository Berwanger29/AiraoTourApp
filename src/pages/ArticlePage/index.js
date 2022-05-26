import React, { useState } from 'react'
import {
    Container,
    DescriptionContainer,
    IconButton,
    IconsTopContainer,
    ImageBckg,
    ImageContainer,
    OverImageContainer,
    SubTitle,
    Title,
    TitleContainer,
    Adress,
    Description,
    IconsBottomContainer,
    ScrollDescription,
    AuthorImageContainer,
    AuthorImage
} from './styles'

import { MaterialCommunityIcons } from '@expo/vector-icons';
import theme from '../../global/theme';
import { RFValue } from 'react-native-responsive-fontsize';

import { useNavigation } from '@react-navigation/native';

const ArticlePage = ({ route }) => {

    const { title, preview, description, image, authorImage } = route.params

    const navigation = useNavigation()
    function handleGoBack() {
        navigation.goBack()
    }




    return (
        <Container>
            <ImageContainer>
                <ImageBckg
                    source={{ uri: image }}
                >
                    <OverImageContainer>
                        <IconsTopContainer>
                            <IconButton onPress={() => handleGoBack()}>
                                <MaterialCommunityIcons name="arrow-left-top" size={RFValue(20)} color={theme.colors.primary} />
                            </IconButton>
                            <MaterialCommunityIcons name="share-variant" size={RFValue(20)} color={theme.colors.primary} />
                        </IconsTopContainer>


                        <TitleContainer>
                            <Title>{title}</Title>
                            <SubTitle>
                                {preview}
                            </SubTitle>
                        </TitleContainer>
                    </OverImageContainer>
                </ImageBckg>
            </ImageContainer>
            <DescriptionContainer>
                <AuthorImageContainer>
                    <AuthorImage
                        source={{ uri: authorImage }}
                    />
                </AuthorImageContainer>
                <ScrollDescription
                    showsVerticalScrollIndicator={false}
                >
                    <Adress>
                        Rua Naíde Batista, 35 - Horizonte, Novo Airão - AM
                    </Adress>
                    <Description>
                        {description}
                    </Description>
                    <Description>
                        {description}
                    </Description>

                    <Description>
                        {description}
                    </Description>
                    <Description>
                        {description}
                    </Description>
                    <Description>
                        {description}
                    </Description>
                </ScrollDescription>

                <IconsBottomContainer>
                    <IconButton onPress={() => { }}>
                        <MaterialCommunityIcons name="web" size={RFValue(22)} color={theme.colors.white} />
                    </IconButton>
                    <IconButton onPress={() => { }}>
                        <MaterialCommunityIcons name="instagram" size={RFValue(22)} color={theme.colors.white} />
                    </IconButton>
                    <IconButton onPress={() => { }}>
                        <MaterialCommunityIcons name="facebook" size={RFValue(22)} color={theme.colors.white} />
                    </IconButton>
                    <IconButton onPress={() => { }}>
                        <MaterialCommunityIcons name="email" size={RFValue(22)} color={theme.colors.white} />
                    </IconButton>
                </IconsBottomContainer>
            </DescriptionContainer>
        </Container>
    )
}

export default ArticlePage