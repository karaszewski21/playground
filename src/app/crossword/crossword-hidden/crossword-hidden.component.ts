import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ModeHidden } from '../store';

@Component({
  selector: 'app-crossword-hidden',
  templateUrl: './crossword-hidden.component.html',
  styleUrls: ['./crossword-hidden.component.scss'],
})
export class CrosswordHiddenComponent implements OnInit {
  modeHidden: boolean = false;
  constructor(private store: Store) {}

  ngOnInit(): void {}
  changeMode(): void {
    this.modeHidden = !this.modeHidden;

    let mode = this.modeHidden;
    this.store.dispatch(new ModeHidden({ mode }));
  }
}
