import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { fromEvent, interval, Observable } from 'rxjs';
import {
  debounce,
  switchMap,
  debounceTime,
  first,
  switchMapTo,
} from 'rxjs/operators';

import { Rebus } from '../model/Rebus';
import { AddRebus, AddPasswordRebus } from '../store/actions/rebus';
import { Store } from '@ngrx/store';
import { getRebus } from '../store/reducers/rebus';

@Component({
  selector: 'app-rebus-password',
  templateUrl: './rebus-password.component.html',
  styleUrls: ['./rebus-password.component.scss'],
})
export class RebusPasswordComponent implements OnInit {
  passwordControl: FormControl = new FormControl();

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.select(getRebus).subscribe(({ password }) => {
      this.passwordControl.setValue(password);
    });
  }

  addPassword(): void {
    let password = this.passwordControl.value;
    this.store.dispatch(new AddPasswordRebus({ password }));
  }
}
