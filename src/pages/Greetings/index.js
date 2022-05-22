import React from 'react'

import {
    Container,
    ContainerBackgroundImg,
    Filter,
    ContentContainer,
    Title,
    Texto,
    Button,
    ButtonText
} from './styles'


import LogoWhite from '../../../assets/svgComponents/LogoWhite'


const Greetings = () => {
    return (
        <Container>
            <ContainerBackgroundImg
                source={require('../../../assets/images/greetingsBckg.png')}
                resizeMode='cover'
            >
                <Filter>
                    <LogoWhite />
                    <ContentContainer>
                        <Title>Descubra a magia de{'\n'}Novo Airão</Title>
                        <Texto>Nam ornare enim varius semper vulputate. Cras blandit
                            ultricies nulla, non facilisis ante. In in nulla nec
                            justo elementum placerat. Aenean vel ipsum ac purus
                            tincidunt eleifend vitae id sem.
                        </Texto>
                        <Button
                            activeOpacity={0.7}
                            onPress={() => { }}
                        >
                            <ButtonText>
                                Desobrir
                            </ButtonText>
                        </Button>
                    </ContentContainer>
                </Filter>
            </ContainerBackgroundImg>
        </Container>
    )
}

export default Greetings