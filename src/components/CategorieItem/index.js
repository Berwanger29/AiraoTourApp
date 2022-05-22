
import react, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import {
    CardContainer,
    Label,
} from "./styles";

import { MaterialIcons } from '@expo/vector-icons';
import theme from "../../global/theme";
import { RFValue } from "react-native-responsive-fontsize";



const CategorieItem = ({ categorie }) => {

    const [iconName, setIconName] = useState('')


    useEffect(() => {
        let categorieName = categorie.categorie

        switch (categorieName) {
            case 'Hotéis':
                setIconName('hotel')
                break;

            case 'Atividades':
                setIconName('directions-run');
                break;
            case 'Restaurantes':
                setIconName('local-restaurant');
                break;
            case 'Cafeterias':
                setIconName('local-cafe')
                break;
            case 'Passeios':
                setIconName('directions-boat')
                break;
            case 'Ar livre':
                setIconName('beach-access')
                break;
        }
    }, [])

    return (
        <CardContainer style={styles.elevation}>

            <MaterialIcons name={iconName} size={RFValue(36)} color={theme.colors.white} />
            <Label>
                {categorie.categorie}
            </Label>
        </CardContainer>
    )
}

const styles = StyleSheet.create({
    elevation: 5
})

export default CategorieItem