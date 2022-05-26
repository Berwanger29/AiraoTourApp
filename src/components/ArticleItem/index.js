import React, { useState, useEffect } from 'react'
import {
    Container,
} from './styles'

import { MaterialCommunityIcons } from '@expo/vector-icons';
import theme from '../../global/theme';
import { RFValue } from 'react-native-responsive-fontsize';

const ArticleItem = ({ data }) => {

    const [icon, setIcon] = useState('')



    useEffect(() => {
        let categorie = data.item.categorie
        switch (categorie) {
            case 'Serviços':
                setIcon('hospital')
                break;
            case 'Curiosidades':
                setIcon('book-search-outline')
                break;
        }
    }, [])
    return (
        <Container>
            <MaterialCommunityIcons name={icon} size={RFValue(20)} color={theme.colors.white} />
        </Container>
    )
}

export default ArticleItem;