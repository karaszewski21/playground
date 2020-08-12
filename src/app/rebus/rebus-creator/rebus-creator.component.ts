import {
  Component,
  OnInit,
  ViewChild,
  HostBinding,
  ViewEncapsulation,
  OnDestroy,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AccessRebusItem } from '../model/AccessRebusItem';
import { getAccessRebusItems, getRebus } from '../store/reducers/rebus';
import {
  AccessRebusItem as AccessRebusItemAction,
  AddRebusItemSuccess,
  AddRebusItem,
} from '../store/actions/index';
import { PlusRebusItem } from '../model/PlusRebusItem';
import { Rebus } from '../model/Rebus';

@Component({
  selector: 'app-rebus-creator',
  templateUrl: './rebus-creator.component.html',
  styleUrls: ['./rebus-creator.component.scss'],
})
export class RebusCreatorComponent implements OnInit, OnDestroy {
  isModalVisible = false;
  password: string;
  nameModalComponent: string;
  accessRebustItems$: Observable<AccessRebusItem[]>;
  getRebust$: Observable<Rebus>;
  getRebustSubscription$: Subscription;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(new AccessRebusItemAction());
    this.accessRebustItems$ = this.store.select(getAccessRebusItems);
    this.getRebustSubscription$ = this.store
      .select(getRebus)
      .subscribe(({ password }) => {
        this.password = password;
      });
  }

  openModal(nameModalComponent: string): void {
    if (this.password !== '') {
      this.isModalVisible = true;
      this.nameModalComponent = nameModalComponent;
    } else {
      alert('nie dodano hasla');
    }
  }

  resetNameModal(): void {
    this.nameModalComponent = '';
    this.isModalVisible = false;
  }

  appPlus(): void {
    let rebusItem: PlusRebusItem = {
      height: 50,
      width: 50,
      name: '+',
      nameComponent: 'PlusComponent',
      size: null,
    };
    this.store.dispatch(new AddRebusItem({ rebusItem }));
  }

  ngOnDestroy(): void {
    this.getRebustSubscription$.unsubscribe();
  }
}
