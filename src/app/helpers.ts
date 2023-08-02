import { Product } from '../domain/typings';

const findTotal = (arr: Product[]): number =>
  arr.reduce((prev, current) => prev + current.price * current.quantity, 0);

export default findTotal;
