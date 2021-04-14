import {atom} from 'jotai';
import { Flight } from '../models/flight';

export const flightsAtom = atom<Flight[]>([]);