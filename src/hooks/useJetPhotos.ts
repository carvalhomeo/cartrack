import { JetPhotos } from "../api-interfaces";
import api from "../services/api"
import { queryClient } from "../services/query-client"

export const useJetPhotos = () => {
    const fetchJetPhotos = async () => {
        const {data} = await api.get<JetPhotos>('jetPhotos');
        return data;
    }

    queryClient.prefetchQuery('jetPhotos', fetchJetPhotos);
}