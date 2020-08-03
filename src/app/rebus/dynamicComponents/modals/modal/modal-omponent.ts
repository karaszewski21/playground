import { Store } from '@ngrx/store';
import { AddRebusItem } from '../../../store/actions/rebus';
import { IRebusItem } from '../../../model/interface/IRebusItem';
export abstract class ModalComponent {
  constructor(private store: Store) {}

  sendModelToStore(rebusItem: IRebusItem): void {
    this.store.dispatch(new AddRebusItem({ rebusItem }));
  }
}
