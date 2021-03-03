import { PriceValue } from './price-value';

export interface PriceDetails {
  key: string;
  name: string;
  unit: number;
  values: Array<PriceValue>;
}
