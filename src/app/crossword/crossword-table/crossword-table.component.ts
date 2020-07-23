import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getCrosswordItems, getCrossword } from '../store';
import { Observable } from 'rxjs';
import { CrosswordItem } from '../model/crosswordItem';
import { Crossword } from '../model/crossword';

@Component({
  selector: 'app-crossword-table',
  templateUrl: './crossword-table.component.html',
  styleUrls: ['./crossword-table.component.scss'],
})
export class CrosswordTableComponent implements OnInit {
  crosswordItems$: Observable<CrosswordItem[]>;
  crossword: Crossword;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.crosswordItems$ = this.store.select(getCrosswordItems);
    this.store.select(getCrossword).subscribe((crossword) => {
      this.crossword = crossword;
    });
  }
}
