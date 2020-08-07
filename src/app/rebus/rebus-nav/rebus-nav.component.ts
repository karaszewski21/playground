import { Component, OnInit } from '@angular/core';
import { getRebus } from '../store/reducers/rebus';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-rebus-nav',
  templateUrl: './rebus-nav.component.html',
  styleUrls: ['./rebus-nav.component.scss'],
})
export class RebusNavComponent implements OnInit {
  changeModeRebus: boolean;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.select(getRebus).subscribe((rebus) => {
      this.changeModeRebus = rebus?.show;
    });
  }
}
