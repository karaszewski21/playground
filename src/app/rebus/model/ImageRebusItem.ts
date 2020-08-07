import { IRebusItem } from './interface/IRebusItem';

export class ImageRebusItem implements IRebusItem {
  width: number;
  nameComponent: string;
  name: string;
  height: number;
  size: number;
  imageBase64: string;
}
