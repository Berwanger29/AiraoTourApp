import React, { useEffect } from 'react'
import HeaderBar from '../../components/HeaderBar'
import ListItem from '../../components/ListItem'
import SearchBar from '../../components/SearchBar'
import TitleLabel from '../../components/TitleLabel'
import {
    Container, InputContainer,
} from './styles'

const List = ({ route }) => {

    const { title, data } = route.params


    return (
        <Container>
            <HeaderBar />
            <InputContainer>
                <SearchBar />
            </InputContainer>
            <TitleLabel title={title} />
            <ListItem
                data={data}
            />
        </Container>
    )
}

export default List