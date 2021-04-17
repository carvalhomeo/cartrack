
export interface Flight {
    icao24: string;
    callsign: string;
    origin_country: string;
    longitude: number;
    latitude: number;
    baro_altitude: number;
    velocity: number;
    true_track: number;
}

export interface iJetPhotos {
    _id: string;
    icao: string;
    image: string;
}