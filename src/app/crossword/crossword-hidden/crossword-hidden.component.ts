import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ModeHidden } from '../store';

@Component({
  selector: 'app-crossword-hidden',
  templateUrl: './crossword-hidden.component.html',
  styleUrls: ['./crossword-hidden.component.scss'],
})
export class CrosswordHiddenComponent implements OnInit {
  hideAnswer: boolean = true;

  constructor(private store: Store) {}

  ngOnInit(): void {}

  changeMode(): void {
    let mode = (this.hideAnswer = !this.hideAnswer);
    this.store.dispatch(new ModeHidden({ mode }));
  }
}
