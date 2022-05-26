import react, { useEffect } from 'react'

import {
    Container,
    Optionslist,
} from './styles'

import ListArticlesCard from '../ListArticlesCard'



const ListArticles = ({ data }) => {

    useEffect(() => {
        console.log('-----------------')
        console.log(data)
    }, [])

    return (
        <Container>
            <Optionslist
                data={data}
                renderItem={({ item }) => (
                    <ListArticlesCard
                        title={item.title}
                        image={item.image}
                        description={item.description}
                        preview={item.preview}
                        authorImage={item.authorImage}
                    />)}
            />
        </Container>
    )
}

export default ListArticles