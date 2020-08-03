import { Component, OnInit, Input } from '@angular/core';
import { IRebusItemComponent } from '../rebusItem/rebusitem-component';
import { IRebusItem } from '../../../model/interface/IRebusItem';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent implements IRebusItemComponent, OnInit {
  @Input() rebusItem: IRebusItem;

  constructor() {}

  ngOnInit(): void {}
}
