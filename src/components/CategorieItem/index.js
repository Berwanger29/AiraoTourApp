
import react, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import {
    CardContainer,
    ImageBackground,
    FilterContainer,
    Label,
} from "./styles";

import { MaterialIcons } from '@expo/vector-icons';
import theme from "../../global/theme";
import { RFValue } from "react-native-responsive-fontsize";

import { useNavigation } from "@react-navigation/native";



const HomeItem = ({ categorie }) => {

    const navigation = useNavigation();

    function handleSelectedCategorie() {
        navigation.navigate('List', {
            title: categorie.categorie,
            data: categorie.itens
        })
    }

    const [iconName, setIconName] = useState('')
    const [image, setimage] = useState('cardBckg.jpg')


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

        console.log(categorie.itens)
    }, [])

    return (
        <CardContainer
            activeOpacity={0.5}
            style={styles.elevation}
            onPress={() => handleSelectedCategorie()}
        >
            <ImageBackground
                source={categorie.image}
                resizeMode='cover'
                imageStyle={{ borderRadius: 5 }}
            >
                <FilterContainer>
                    <MaterialIcons
                        name={iconName}
                        size={RFValue(36)}
                        color={theme.colors.white}
                    />
                    <Label>
                        {categorie.categorie}
                    </Label>
                </FilterContainer>
            </ImageBackground>
        </CardContainer>
    )
}

const styles = StyleSheet.create({
    elevation: 5
})

export default HomeItem