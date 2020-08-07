import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IRebusItemComponent } from '../../interface/rebusitem-component';
import { IRebusItem } from '../../../model/interface/IRebusItem';
import { XTextRebusItem } from '../../../model/XTextRebusItem';

@Component({
  selector: 'app-xtext',
  templateUrl: './xtext.component.html',
  styleUrls: ['./xtext.component.scss'],
})
export class XTextComponent implements IRebusItemComponent, OnInit {
  @Input() rebusItem: XTextRebusItem;
  @Output() rebusEvent: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
