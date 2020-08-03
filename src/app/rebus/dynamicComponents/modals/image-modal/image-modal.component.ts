import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '../modal/modal-component';
import { Store } from '@ngrx/store';
import { ImageRebusItem } from '../../../model/ImageRebusItem';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.scss'],
})
export class ImageModalComponent extends ModalComponent implements OnInit {
  imageRebusItem: ImageRebusItem;
  constructor(store: Store) {
    super(store);
  }

  ngOnInit(): void {}

  sendModelToStore(): void {
    this.imageRebusItem = {
      height: 12,
      wight: 20,
      imageBase64: null,
      name: 'test',
      nameComponent: 'ImageComponent',
      size: 20,
    };

    super.sendModelToStore(this.imageRebusItem);
  }
}
