import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IRebusItem } from '../model/interface/IRebusItem';
import { getRebusItems } from '../store/reducers/rebus';

@Component({
  selector: 'app-rebus-items',
  templateUrl: './rebus-items.component.html',
  styleUrls: ['./rebus-items.component.scss'],
})
export class RebusItemsComponent implements OnInit {
  getRebusItems$: Observable<IRebusItem[]>;

  constructor(private store: Store) {
    this.getRebusItems$ = this.store.select(getRebusItems);
    this.getRebusItems$.subscribe((model) => console.log(model));
  }

  ngOnInit(): void {}
}
