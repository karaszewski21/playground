import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '../modal/modal-omponent';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-xtext-modal',
  templateUrl: './xtext-modal.component.html',
  styleUrls: ['./xtext-modal.component.scss'],
})
export class XTextModalComponent extends ModalComponent implements OnInit {
  constructor(store: Store) {
    super(store);
  }

  ngOnInit(): void {}
}
