import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IRebusItemComponent } from '../../interface/rebusitem-component';
import { PlusRebusItem } from '../../../model/PlusRebusItem';

@Component({
  selector: 'app-plus',
  templateUrl: './plus.component.html',
  styleUrls: ['./plus.component.scss'],
})
export class PlusComponent implements IRebusItemComponent, OnInit {
  @Input() rebusItem: PlusRebusItem;
  @Output() rebusEvent: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
