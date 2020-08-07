import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { IRebusItemComponent } from '../../interface/rebusitem-component';
import { IRebusItem } from '../../../model/interface/IRebusItem';
import { ImageRebusItem } from '../../../model/ImageRebusItem';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent implements IRebusItemComponent, OnInit {
  @Input() rebusItem: ImageRebusItem;
  @Output() rebusEvent: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
