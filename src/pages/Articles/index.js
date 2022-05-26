import react from 'react'

import {
    ArticlesContainer,
    Container,
    InputContainer
} from './styles'

import HeaderBar from '../../components/HeaderBar'
import SearchBar from '../../components/SearchBar'
import TitleLabel from '../../components/TitleLabel'
import ScrollArticleItem from '../../components/ScrollArticleItem'
import ListArticles from '../../components/ListArticles'

import articles from '../../articles'

const Articles = () => {

    const data = articles

    return (
        <Container>
            <HeaderBar />
            <InputContainer>
                <SearchBar />
            </InputContainer>
            <TitleLabel title={'Artigos'} />
            <ScrollArticleItem data={data} />
            <ArticlesContainer>
                <ListArticles data={data} />
            </ArticlesContainer>
        </Container>
    )
}

export default Articles