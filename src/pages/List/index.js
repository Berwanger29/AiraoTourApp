import React, { LogBox, useEffect } from 'react'


import HeaderBar from '../../components/HeaderBar'
import ListItem from '../../components/ListItem'
import SearchBar from '../../components/SearchBar'
import TitleLabel from '../../components/TitleLabel'

import {
    Container,
    InputContainer
} from './styles'



import Lottie from 'lottie-react-native'
import waiting from '../../../assets/waiting.json'
import EmptyContent from '../../components/EmptyContent'


const List = ({ route }) => {

    const { title, data } = route.params



    return (

        <Container>

            <HeaderBar />
            <InputContainer>
                <SearchBar />
            </InputContainer>
            <TitleLabel title={title} />
            {data &&
                <>
                    <ListItem
                        data={data}
                    />
                </>
            }

            {!data &&
                <>
                    <EmptyContent />
                </>
            }
        </Container>
    )
}

export default List