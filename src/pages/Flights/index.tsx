import {Container, Loading, CartrackImg} from './styles';
import GoogleMapReact from 'google-map-react';
import Airplane from '../../components/Airplane';
import { useFlights } from '../../hooks/useFlights';

const Flights = () => {
    const {data: flights, isLoading, error} = useFlights();
    
    if (isLoading) return <Loading><CartrackImg src={'cartrack-logo.svg'}/></Loading>;
    if (error) return <div> error.message</div>;

    return (
        <Container>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyCOlDs0H56Q6YH1ZeNwqTU7CT7g-CMGsWY' }}
                defaultCenter={{lat: 39.55719, lng: -7.85366}}
                defaultZoom={7}
            >
            {flights?.map(flight => (
                <Airplane
                    key={flight.icao24}
                    lat={flight.latitude}
                    lng={flight.longitude}
                    flight={flight}
                />
            ))}
            </GoogleMapReact>
        </Container>
    )
}

export default Flights;
