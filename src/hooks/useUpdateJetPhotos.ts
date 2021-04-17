import { useMutation } from "react-query";
import { JetPhotos } from "../api-interfaces";
import api from "../services/api";
import { useNotify } from "./useNotify";

export const useUpdateJetPhotos = () => {
    const {notify} = useNotify();
    const addJetPhotos = async (payload: JetPhotos) => {
        await api.put<JetPhotos>(`jetPhotos/${payload._id}`, payload);
    }

    const {mutate} = useMutation(addJetPhotos, {
        onSuccess: () => {
            console.log('foi');
            
            notify.success('Image updated');
        },
        onError: () => {
            notify.error('Error trying to update image');
        }
    });

    return mutate;
}