import { Price } from './Price';

export interface Package {
  id: number;
  name: string;
  prices: Price[];
}
