import { Component, OnInit, Input } from '@angular/core';
import { IRebusItem } from '../../../model/interface/IRebusItem';
import { IRebusItemComponent } from '../rebusItem/rebusitem-component';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
})
export class TextComponent implements IRebusItemComponent, OnInit {
  @Input() rebusItem: IRebusItem;

  constructor() {}

  ngOnInit(): void {}
}
