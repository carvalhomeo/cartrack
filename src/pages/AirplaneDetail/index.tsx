import { useCallback, useEffect, useMemo, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useAddJetPhotos } from '../../hooks/useAddJetPhotos';
import { Flight, iJetPhotos } from '../../models/flight';
import { KEY_FLIGHTS, KEY_JET_PHOTOS } from '../../queries/keys';
import { queryClient } from '../../services/query-client';
import { 
    Container, 
    Header, 
    Content, 
    AirplaneImg, 
    Card, 
    Item, 
    Title,
    BackButton,
    NewImg,
    MediaContainer,
    ImgList,
    DeleteButton,
    AirplaneContent,
    ImgPlaceholder
} from './styles';
import { BsChevronLeft, BsFillTrashFill } from 'react-icons/bs';
import { MetroSpinner } from "react-spinners-kit";
import { useUpdateJetPhotos } from '../../hooks/useUpdateJetPhotos';
import { useJetPhotos } from '../../hooks/useJetPhotos';
import { useDeletePhotos } from '../../hooks/useDeleteJetPhotos';
import { useAirPlaneImages } from '../../hooks/useAirPlaneImages';

const AirplaneDetail = () => {
    const {icao} = useParams<{icao: string}>();
    const history = useHistory();
    const {data: jetPhotos, isLoading: loadingJetPhotos, isFetching, refetch} = useJetPhotos();
    const {data: airPlaneImages, isLoading: loadingAirplaneImages} = useAirPlaneImages(icao);
    const createJetPhoto = useAddJetPhotos();
    const updateJetPhoto = useUpdateJetPhotos();
    const deleteJetPhoto = useDeletePhotos();
    
    const [currentAirplaneImg, setCurrentAirplaneImg] = useState<iJetPhotos>();

    const selectedFlight = useMemo(() => {
        const flights = queryClient.getQueryData<Flight[]>(KEY_FLIGHTS);
        return flights?.find(flight => flight.icao24 === icao);
    },[icao]);

    const {currentJet} = useMemo(() => {
        const currentJet = jetPhotos?.find(jet => jet.icao === icao);
        console.log({currentJet});
        
        return {currentJet}
    },[icao, jetPhotos]);

    useEffect(() => {
        if(currentJet) {
            setCurrentAirplaneImg(currentJet);
        } else {
            if(!loadingJetPhotos && !loadingAirplaneImages && airPlaneImages) {
                if(airPlaneImages?.length > 0) {
                    const imgUrl = airPlaneImages.find(img => img !== undefined);
                    if(imgUrl) {
                        setCurrentAirplaneImg({_id: '', icao, image: imgUrl?.imageUrl});
                        createJetPhoto({
                            username: 'marcel carvalho', 
                            airplane_icao: icao,
                            airplane_image: imgUrl?.imageUrl
                        });
                    }
                }
            }
        }

        return () => {
            queryClient.invalidateQueries(KEY_JET_PHOTOS);
        }
    },[airPlaneImages, createJetPhoto, currentJet, icao, loadingAirplaneImages, loadingJetPhotos, refetch]);
    
    const handleImageUpdate = useCallback(async (imageUrl: string) => {
        currentAirplaneImg && 
        updateJetPhoto({
            _id: currentAirplaneImg?._id,
            username: 'marcel carvalho', 
            airplane_icao: icao,
            airplane_image: imageUrl
        });
        await refetch();

    },[currentAirplaneImg, icao, refetch, updateJetPhoto]);

    const handleImageDelete = useCallback(async () => {
        currentAirplaneImg && 
        deleteJetPhoto(currentAirplaneImg._id);
        await refetch();
        setCurrentAirplaneImg({} as iJetPhotos);
    },[currentAirplaneImg, deleteJetPhoto, refetch]);

    return (
        <Container>
            <BackButton onClick={() => history.push('/')}>
                <BsChevronLeft />
            </BackButton>
            <Card>
            <Header>
                {selectedFlight?.callsign}
            </Header>
            <Content>
                <MediaContainer>
                    <MetroSpinner size={30} color="#686769" loading={isFetching} />
                    {
                    !isFetching && 
                    <>
                    <AirplaneContent>
                    {(loadingJetPhotos || !currentJet) ? 
                    <ImgPlaceholder>No image found</ImgPlaceholder>
                    :
                    <>
                        <AirplaneImg src={currentAirplaneImg?.image} alt="airplane" />
                        <DeleteButton 
                            onClick={handleImageDelete}
                        >
                            <BsFillTrashFill />
                        </DeleteButton>
                    </>
                    }
                    </AirplaneContent>
                    <ImgList>
                    {airPlaneImages?.map((airplaneImg, index) => (
                        <NewImg 
                            key={index}
                            src={airplaneImg.imageUrl} 
                            alt={airplaneImg.photographer}
                            onClick={() => handleImageUpdate(airplaneImg.imageUrl)}
                        />
                    ))}
                    </ImgList>
                    </>
                    }
                </MediaContainer>
                <Item>
                    <Title>Origin country: </Title>
                    <p>{selectedFlight?.origin_country}</p>
                </Item>
                <Item>
                    <Title>Longitude: </Title>
                    <p>{selectedFlight?.longitude}</p>
                </Item>
                <Item>
                    <Title>Latitude: </Title>
                    <p>{selectedFlight?.latitude}</p>
                </Item>
                <Item>
                    <Title>Barometer altitude: </Title>
                    <p>{selectedFlight?.baro_altitude}</p>
                </Item>
                <Item>
                    <Title>Velocity: </Title>
                    <p>{selectedFlight?.velocity}</p>
                </Item>
            </Content>
            </Card>
        </Container>
    )
}

export default AirplaneDetail;
