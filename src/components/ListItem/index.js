import react, { useEffect } from 'react'

import {
    Container,
    Optionslist,
} from './styles'

import ListCard from '../ListCard'



const ListItem = ({ data }) => {



    return (
        <Container>
            <Optionslist
                data={data}
                renderItem={({ item }) => (
                    <ListCard
                        title={item.title}
                        preview={item.preview}
                        image={item.image}
                        description={item.description}
                    />)}
            />
        </Container>
    )
}

export default ListItem