import { useQuery } from "react-query";
import { AllFlights } from "../api-interfaces";
import { Flight } from "../models/flight";
import { KEY_FLIGHTS } from "../queries/keys";
import api from "../services/api";

export const useFlights = () => {    
    const getFlights = async () => {
        const {data} = await api.get<AllFlights>('allFlights');

        const mappedFlights = data?.map<Flight>(flights => ({
            icao24: flights[0].toString(),
            callsign: flights[1].toString(),
            origin_country: flights[2].toString(),
            longitude: Number(flights[3]),
            latitude: Number(flights[4]),
            baro_altitude: Number(flights[5]),
            velocity: Number(flights[6]),
            true_track: Number(flights[7]),
        }));

        return mappedFlights;
    }
    
    const {data, isLoading, error} = useQuery(KEY_FLIGHTS, getFlights);
    
    return {data, isLoading, error};
}