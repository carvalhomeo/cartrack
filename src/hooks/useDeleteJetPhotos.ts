import { useMutation } from "react-query";
import { JetPhotos } from "../api-interfaces";
import api from "../services/api";
import { useNotify } from "./useNotify";

export const useDeletePhotos = () => {
    const {notify} = useNotify();
    const deleteJetPhotos = async (id: string) => {
        await api.delete<JetPhotos>(`jetPhotos/${id}`);
    }

    const {mutate} = useMutation(deleteJetPhotos, {
        onSuccess: () => {
            notify.success('Image deleted');
        },
        onError: () => {
            notify.error('Error trying to delete image');
        }
    });

    return mutate;
}
