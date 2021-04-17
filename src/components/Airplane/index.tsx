import { Flight } from '../../models/flight';
import { AirplaneImg, Container, Label } from './styles';
import AirPlane from '../../images';
import { useHistory } from 'react-router-dom';
import { useAtom } from 'jotai';
import { flightAtom } from '../../atoms/flight';
interface AirplaneProps {
    flight: Flight;
    lat: number;
    lng: number;
}

const Airplane = ({flight}: AirplaneProps) => {
    //const [, setSelectedFlight] = useAtom(flightAtom);
    const history = useHistory();
    const handleClick = () => {
        //setSelectedFlight(flight);
        history.push(`airplaneDetail/${flight.icao24}`);
    }
    return (
        <Container>
            <AirplaneImg
                src={AirPlane} 
                alt="airplane" 
                {...{"track": flight.true_track}} 
                onClick={handleClick}
            />
            <Label>{flight.callsign}</Label>
        </Container>
    )
}

export default Airplane;
