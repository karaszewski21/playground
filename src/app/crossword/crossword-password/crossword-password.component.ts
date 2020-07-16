import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Crossword } from '../../model/crossword';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-crossword-password',
  templateUrl: './crossword-password.component.html',
  styleUrls: ['./crossword-password.component.scss'],
})
export class CrosswordPasswordComponent implements OnInit {
  password: FormControl;

  constructor(private store: Store<Crossword>) {}

  ngOnInit(): void {
    this.password = new FormControl('');
    this.password.valueChanges.subscribe((password) => {
      console.log(password);
    });
  }
}
