import { Store } from '@ngrx/store';
import { AddRebusItem } from '../../../store/actions/rebus';
import { IRebusItem } from '../../../model/interface/IRebusItem';
import { IRebusItemComponent } from '../../interface/rebusitem-component';
import { EventEmitter } from '@angular/core';
export abstract class ModalComponent implements IRebusItemComponent {
  constructor(private store: Store) {}
  rebusItem: IRebusItem;
  rebusEvent: EventEmitter<any> = new EventEmitter();

  sendModelToStore(rebusItem: IRebusItem): void {
    this.store.dispatch(new AddRebusItem({ rebusItem }));
  }

  closeModal() {
    this.rebusEvent.emit('close');
  }
}
