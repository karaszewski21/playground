import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Crossword } from '../../model/crossword';
import { FormControl } from '@angular/forms';
import { CreateCrossword } from '../store';

@Component({
  selector: 'app-crossword-password',
  templateUrl: './crossword-password.component.html',
  styleUrls: ['./crossword-password.component.scss'],
})
export class CrosswordPasswordComponent implements OnInit {
  constructor(private store: Store<Crossword>) {}

  ngOnInit(): void {}

  AddPassword(password: string): void {
    this.store.dispatch(new CreateCrossword({ password }));
  }
}
