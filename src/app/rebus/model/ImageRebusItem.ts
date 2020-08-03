import { IRebusItem } from './interface/IRebusItem';

export class ImageRebusItem implements IRebusItem {
  nameComponent: string;
  name: string;
  height: number;
  wight: number;
  size: number;
  imageBase64: string;
}
