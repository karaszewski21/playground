import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ModalComponent } from '../modal/modal-component';
import { Store } from '@ngrx/store';
import { ImageRebusItem } from '../../../model/ImageRebusItem';
import { IRebusItemComponent } from '../../interface/rebusitem-component';
import { IRebusItem } from '../../../model/interface/IRebusItem';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.scss'],
})
export class ImageModalComponent extends ModalComponent implements OnInit {
  imageRebusItem: ImageRebusItem;
  width: number;
  height: number;
  imageChangedEvent: any = '';
  croppedImage: any = '';

  constructor(store: Store) {
    super(store);
  }

  ngOnInit(): void {}

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
    this.width = 200;
    this.height = 200;
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;

    this.imageRebusItem = {
      height: event.height,
      name: 'Obrazek',
      width: event.width,
      nameComponent: 'ImageComponent',
      size: null,
      imageBase64: event.base64,
    };
  }

  imageLoaded() {
    // show cropper
  }
  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
    // show message
  }

  addImageAndcloseModal() {
    super.sendModelToStore(this.imageRebusItem);
    super.closeModal();
  }
}
