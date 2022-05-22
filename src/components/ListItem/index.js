import react, { useEffect } from 'react'

import {
    Container,
    Optionslist,
} from './styles'

import ListCard from '../ListCard'

const ListItem = ({ data }) => {

    useEffect(() => {
        console.log('-----------------')
        console.log(data)
    }, [])

    return (
        <Container>
            <Optionslist
                data={data}
                renderItem={({ item }) => <ListCard title={item.title} description={item.description} />}
            />
        </Container>
    )
}

export default ListItem