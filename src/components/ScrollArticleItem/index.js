import react, { useEffect } from 'react'
import {
    Container, List,
} from './styles'

import Articleitem from '../ArticleItem'



const ScrollArticleItem = ({ data }) => {

    return (
        <Container>
            <List
                data={data}
                renderItem={(item) => <Articleitem data={item} />}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </Container>
    )
}

export default ScrollArticleItem;