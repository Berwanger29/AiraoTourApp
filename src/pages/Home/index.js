import React from 'react'

import {
    Container,
    InputContainer
} from './styles'

import HeaderBar from '../../components/HeaderBar'
import TitleLabel from '../../components/TitleLabel'
import SearchBar from '../../components/SearchBar'
import HomeList from '../../components/HomeList'

import data from '../../data'

const Home = () => {
    return (
        <Container>
            <HeaderBar />
            <InputContainer>
                <SearchBar />
            </InputContainer>
            <TitleLabel title={'Categorias'} />
            <HomeList data={data} />
        </Container>
    )
}

export default Home