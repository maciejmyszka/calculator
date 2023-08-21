import { Price } from './Price';
import { Package } from './Package';

export interface BaseOffer {
  id: number;
  name: string;
  prices: Price[];
  packages?: Package[];
}
