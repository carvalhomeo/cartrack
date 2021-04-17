import { useMutation } from "react-query"
import { toast } from "react-toastify";
import { KEY_JET_PHOTOS } from "../queries/keys";
import api from "../services/api";
import { useNotify } from "./useNotify";

interface JetPhotos {
    username: string;
    airplane_icao: string;
    airplane_image: string;
}

export const useAddJetPhotos = () => {
    const {notify} = useNotify();
    const addJetPhotos = async (payload: JetPhotos) => {
        console.log('payload', payload);
        const {data} = await api.post<JetPhotos>(KEY_JET_PHOTOS, payload);
        return data;
    }

    const {mutate } = useMutation(addJetPhotos, {
        onSuccess: (data) => {
            console.log({data});
        },
        onError: () => {
            notify.error('Error trying to create image');
        }
    });

    return mutate;
}