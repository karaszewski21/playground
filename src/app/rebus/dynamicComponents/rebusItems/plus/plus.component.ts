import { Component, OnInit, Input } from '@angular/core';
import { IRebusItemComponent } from '../rebusItem/rebusitem-component';
import { IRebusItem } from '../../../model/interface/IRebusItem';

@Component({
  selector: 'app-plus',
  templateUrl: './plus.component.html',
  styleUrls: ['./plus.component.scss'],
})
export class PlusComponent implements IRebusItemComponent, OnInit {
  @Input() rebusItem: IRebusItem;
  constructor() {}

  ngOnInit(): void {}
}
