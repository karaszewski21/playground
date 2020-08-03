import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '../modal/modal-omponent';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-text-modal',
  templateUrl: './text-modal.component.html',
  styleUrls: ['./text-modal.component.scss'],
})
export class TextModalComponent extends ModalComponent implements OnInit {
  constructor(store: Store) {
    super(store);
  }

  ngOnInit(): void {}
}
