import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getCrosswordItems } from '../store';
import { Observable } from 'rxjs';
import { CrosswordItem } from '../../model/crosswordItem';

@Component({
  selector: 'app-crossword-questions',
  templateUrl: './crossword-questions.component.html',
  styleUrls: ['./crossword-questions.component.scss'],
})
export class CrosswordQuestionsComponent implements OnInit {
  crosswordItems$: Observable<CrosswordItem[]>;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.crosswordItems$ = this.store.select(getCrosswordItems);
  }
}
