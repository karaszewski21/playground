import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IRebusItemComponent } from '../../interface/rebusitem-component';
import { TextRebusItem } from '../../../model/TextRebusItem';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
})
export class TextComponent implements IRebusItemComponent, OnInit {
  @Input() rebusItem: TextRebusItem;
  @Output() rebusEvent: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
