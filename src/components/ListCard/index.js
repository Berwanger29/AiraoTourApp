import React from 'react'
import {
    ButtonContainer,
    Description,
    Title,
} from './styles'

const ListCard = ({ title, description, image }) => {
    return (
        <ButtonContainer>
            <Title>
                {title}
            </Title>
            <Description>
                {description}
            </Description>
        </ButtonContainer>
    )
}

export default ListCard