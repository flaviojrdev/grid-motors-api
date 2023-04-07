import { Document } from 'mongoose';
import { IAccessory } from './accessory';

export interface ICar extends Document {
  model: string;
  color: string;
  year: number;
  values_per_day: number;
  accessories: IAccessory[];
  number_of_passengers: number;
}