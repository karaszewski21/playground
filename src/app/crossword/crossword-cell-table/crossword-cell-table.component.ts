import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { CrosswordService, Row } from '../service/crossword.service';
import { CrosswordItem } from '../model/crosswordItem';
import { Crossword } from '../model/crossword';

@Component({
  selector: 'app-crossword-cell-table',
  templateUrl: './crossword-cell-table.component.html',
  styleUrls: ['./crossword-cell-table.component.scss'],
})
export class CrosswordCellTableComponent implements OnInit {
  cellWithLetter: boolean = false;
  cellWithPassword: boolean = false;
  cellModdHide: boolean = false;
  cellWithoutLetter: boolean = true;

  @Input() cellCrossword: Row;

  constructor() {}

  ngOnInit(): void {}
}
