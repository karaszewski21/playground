import { IRebusItem } from './interface/IRebusItem';

export class ReplaceTextRebusItem implements IRebusItem {
  width: number;
  nameComponent: string;
  name: string;
  height: number;
  size: number;
  font: string;
  leftText: string;
  rightText: string;
}
