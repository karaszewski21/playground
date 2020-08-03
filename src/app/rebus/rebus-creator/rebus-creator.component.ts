import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AccessRebusItem } from '../model/AccessRebusItem';
import { getAccessRebusItems } from '../store/reducers/rebus';
import { AccessRebusItem as AccessRebusItemAction } from '../store/actions/index';

@Component({
  selector: 'app-rebus-creator',
  templateUrl: './rebus-creator.component.html',
  styleUrls: ['./rebus-creator.component.scss'],
})
export class RebusCreatorComponent implements OnInit {
  nameModalComponent: string;
  accessRebustItems$: Observable<AccessRebusItem[]>;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(new AccessRebusItemAction());
    this.accessRebustItems$ = this.store.select(getAccessRebusItems);
  }

  openModal(nameModalComponent: string) {
    this.nameModalComponent = nameModalComponent;
  }
}
