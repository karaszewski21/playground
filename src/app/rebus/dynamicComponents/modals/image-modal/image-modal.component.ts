import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '../modal/modal-omponent';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.scss'],
})
export class ImageModalComponent extends ModalComponent implements OnInit {
  constructor(store: Store) {
    super(store);
  }

  ngOnInit(): void {}
}
