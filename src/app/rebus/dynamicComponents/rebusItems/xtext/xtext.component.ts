import { Component, OnInit, Input } from '@angular/core';
import { IRebusItemComponent } from '../rebusItem/rebusitem-component';
import { IRebusItem } from '../../../model/interface/IRebusItem';

@Component({
  selector: 'app-xtext',
  templateUrl: './xtext.component.html',
  styleUrls: ['./xtext.component.scss'],
})
export class XTextComponent implements IRebusItemComponent, OnInit {
  @Input() rebusItem: IRebusItem;

  constructor() {}

  ngOnInit(): void {}
}
