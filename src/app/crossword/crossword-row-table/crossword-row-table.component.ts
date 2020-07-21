import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { CrosswordService } from '../service/crossword.service';
import { CrosswordItem } from '../model/crosswordItem';

@Component({
  selector: 'app-crossword-row-table',
  templateUrl: './crossword-row-table.component.html',
  styleUrls: ['./crossword-row-table.component.scss'],
})
export class CrosswordRowTableComponent implements OnInit, OnChanges {
  constructor(private crosswordService: CrosswordService) {}

  @Input() crosswordItem: CrosswordItem;
  rowCrossword: string[];

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this.rowCrossword = this.crosswordService.generateRowFromCrosswordItem(
      changes.crosswordItem.currentValue
    );

    console.log(this.rowCrossword);
  }
}
