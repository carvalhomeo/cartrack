import { JetPhotos } from "../api-interfaces";
import { KEY_JET_PHOTOS } from "../queries/keys";
import api from "../services/api"
import { useQuery } from "react-query";

export const useJetPhotos = () => {
    const fetchJetPhotos = async () => {
        const {data} = await api.get<JetPhotos[]>(KEY_JET_PHOTOS);
       
        const mappedJet = data.map(jet => ({
            _id: jet._id, 
            icao: jet.airplane_icao, 
            image: jet.airplane_image
        })); 
        
        return mappedJet;
    }

    return useQuery(KEY_JET_PHOTOS, fetchJetPhotos);
    //queryClient.prefetchQuery(KEY_JET_PHOTOS, fetchJetPhotos, {staleTime: 60000,}, );
}