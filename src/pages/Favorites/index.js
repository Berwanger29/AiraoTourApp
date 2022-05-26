import React from 'react'

import {
    Container,
    InputContainer,
} from './styles'

import HeaderBar from '../../components/HeaderBar'
import SearchBar from '../../components/SearchBar'
import TitleLabel from '../../components/TitleLabel'

import favoritesList from '../../favoritesList'
import EmptyContent from '../../components/EmptyContent'

const Favorites = () => {

    const data = favoritesList;

    return (
        <Container>
            <HeaderBar />
            <InputContainer>
                <SearchBar />
            </InputContainer>
            <TitleLabel title={'Favoritos'} />

            {/* {!data &&
                <>
                    <EmptyContent />
                </>
            } */}
            <EmptyContent />
        </Container>
    )
}

export default Favorites