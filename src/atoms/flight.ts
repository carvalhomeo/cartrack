import {atom} from 'jotai';
import { Flight } from '../models/flight';

export const flightAtom = atom<Flight>({} as Flight);