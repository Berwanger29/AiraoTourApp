import react from 'react'
import {
    Container,
    Lista,
} from './styles'

import CategorieItem from '../CategorieItem'

const HomeList = ({ data }) => {
    return (
        <Container>
            <Lista
                data={data}
                renderItem={({ item }) => <CategorieItem categorie={item} />}
                numColumns={2}
            />
        </Container>
    )
}

export default HomeList