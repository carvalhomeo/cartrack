import { AirplaneImg, Container } from './styles';

interface AirplaneProps {
    title: string
}

const Airplane = ({title}: any) => {
    return (
        <Container>
            <AirplaneImg src="./images/airplane.png" />
        </Container>
    )
}

export default Airplane;
