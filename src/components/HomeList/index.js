import react from 'react'
import {
    Container,
    Lista,
} from './styles'

import HomeItem from '../HomeItem'

const HomeList = ({ data }) => {
    return (
        <Container>
            <Lista
                data={data}
                renderItem={({ item }) => <HomeItem categorie={item} />}
                numColumns={2}
            //showVerticalIndicator={false}
            />
        </Container>
    )
}

export default HomeList