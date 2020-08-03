import { Component, OnInit, Input } from '@angular/core';
import { IRebusItem } from '../../../model/interface/IRebusItem';
import { IRebusItemComponent } from '../rebusItem/rebusitem-component';

@Component({
  selector: 'app-replace-text',
  templateUrl: './replace-text.component.html',
  styleUrls: ['./replace-text.component.scss'],
})
export class ReplaceTextComponent implements IRebusItemComponent, OnInit {
  @Input() rebusItem: IRebusItem;

  constructor() {}

  ngOnInit(): void {}
}
