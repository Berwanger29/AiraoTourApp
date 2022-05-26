import react from 'react'

import {
    Container,
    Waitingtext
} from './styles'

import Lottie from 'lottie-react-native'
import waiting from '../../../assets/waiting.json'

const EmptyContent = () => {
    return (
        <Container>
            <Lottie
                source={waiting}
                autoPlay
                loop
            />
            <Waitingtext>
                Oops ! Nada por aqui ainda...
            </Waitingtext>
        </Container>
    )
}

export default EmptyContent