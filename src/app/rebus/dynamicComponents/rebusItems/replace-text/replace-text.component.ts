import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IRebusItem } from '../../../model/interface/IRebusItem';
import { IRebusItemComponent } from '../../interface/rebusitem-component';
import { ReplaceTextRebusItem } from '../../../model/ReplaceTextRebusItem';

@Component({
  selector: 'app-replace-text',
  templateUrl: './replace-text.component.html',
  styleUrls: ['./replace-text.component.scss'],
})
export class ReplaceTextComponent implements IRebusItemComponent, OnInit {
  @Input() rebusItem: ReplaceTextRebusItem;
  @Output() rebusEvent: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
