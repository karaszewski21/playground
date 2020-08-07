import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getRebus } from '../store/reducers/rebus';
import { AddRebus } from '../store/actions/rebus';
import { Rebus } from '../model/Rebus';

@Component({
  selector: 'app-rebus',
  templateUrl: './rebus.component.html',
  styleUrls: ['./rebus.component.scss'],
})
export class RebusComponent implements OnInit {
  changeModeRebus: boolean;
  rebus: Rebus;
  constructor(private store: Store) {
    this.changeModeRebus = true;
    console.log(this.changeModeRebus);
  }

  ngOnInit(): void {
    this.rebus = { name: 'rebus', password: '', show: true };
    let rebus = this.rebus;
    this.store.dispatch(new AddRebus({ rebus }));

    this.store.select(getRebus).subscribe((rebus) => {
      this.changeModeRebus = rebus.show;
    });
  }
}
