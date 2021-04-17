import { useQuery } from "react-query";
import { AirplaneImages } from "../api-interfaces";
import { KEY_AIRPLANE_IMAGES } from "../queries/keys";
import api from "../services/api";

export const useAirPlaneImages = (icao: string) => {
    const getAirPlaneImages = async () => {
        const {data} = await api.get<AirplaneImages>(`airplaneImages/${icao}`);

        const mappedAirplaneImgs = data?.map(airplaneImg => ({
            imageUrl: airplaneImg[0],
            photographer: airplaneImg[0][0]
        }));

        return mappedAirplaneImgs;
    }
    
    return useQuery(KEY_AIRPLANE_IMAGES, getAirPlaneImages);
}