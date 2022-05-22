import react from "react";
import {
    CardContainer, Label,

} from "./styles";

const CategorieItem = ({ categorie }) => {
    return (
        <CardContainer>
            <Label>
                {categorie.categorie}
            </Label>
        </CardContainer>
    )
}

export default CategorieItem