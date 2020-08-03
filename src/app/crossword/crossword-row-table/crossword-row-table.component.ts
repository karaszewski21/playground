import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { CrosswordService, Row } from '../service/crossword.service';
import { CrosswordItem } from '../model/crosswordItem';
import { Crossword } from '../model/crossword';

@Component({
  selector: 'app-crossword-row-table',
  templateUrl: './crossword-row-table.component.html',
  styleUrls: ['./crossword-row-table.component.scss'],
})
export class CrosswordRowTableComponent implements OnInit, OnChanges {
  rowCrossword: Row[];
  cellWithLetter: boolean = false;
  cellWithPassword: boolean = false;
  cellModdHide: boolean = false;
  cellWithoutLetter: boolean = true;

  @Input() crosswordItem: CrosswordItem;
  @Input() crossword: Crossword;

  constructor(private crosswordService: CrosswordService) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this.rowCrossword = this.crosswordService.generateRowFromCrosswordItem(
      changes.crosswordItem.currentValue
    );
  }

  setColorForCell() {}
}
