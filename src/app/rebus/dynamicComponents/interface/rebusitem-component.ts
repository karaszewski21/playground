import { IRebusItem } from '../../model/interface/IRebusItem';
import { EventEmitter } from '@angular/core';

export interface IRebusItemComponent {
  rebusItem: IRebusItem;
  rebusEvent: EventEmitter<any>;
}
