import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '../modal/modal-component';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-replace-text-modal',
  templateUrl: './replace-text-modal.component.html',
  styleUrls: ['./replace-text-modal.component.scss'],
})
export class ReplaceTextModalComponent extends ModalComponent
  implements OnInit {
  constructor(store: Store) {
    super(store);
  }

  ngOnInit(): void {}
}
