import react from "react";
import { Container, Title } from "./styles";

const TitleLabel = ({ title }) => {
    return (
        <Container>
            <Title>
                {title}
            </Title>
        </Container>
    )
}


export default TitleLabel