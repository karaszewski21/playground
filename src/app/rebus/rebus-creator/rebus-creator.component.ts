import { Component, OnInit, ViewChild, HostBinding } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AccessRebusItem } from '../model/AccessRebusItem';
import { getAccessRebusItems } from '../store/reducers/rebus';
import {
  AccessRebusItem as AccessRebusItemAction,
  AddRebusItemSuccess,
  AddRebusItem,
} from '../store/actions/index';
import { PlusRebusItem } from '../model/PlusRebusItem';

@Component({
  selector: 'app-rebus-creator',
  templateUrl: './rebus-creator.component.html',
  styleUrls: ['./rebus-creator.component.scss'],
})
export class RebusCreatorComponent implements OnInit {
  isDivVisible = false;
  nameModalComponent: string;
  accessRebustItems$: Observable<AccessRebusItem[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(new AccessRebusItemAction());
    this.accessRebustItems$ = this.store.select(getAccessRebusItems);
  }

  openModal(nameModalComponent: string): void {
    this.isDivVisible = true;
    this.nameModalComponent = nameModalComponent;
  }

  resetNameModal(): void {
    this.nameModalComponent = '';
    this.isDivVisible = false;
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
}
