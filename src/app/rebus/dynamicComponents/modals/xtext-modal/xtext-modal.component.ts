import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '../modal/modal-component';
import { Store } from '@ngrx/store';
import { FormControl } from '@angular/forms';
import { XTextRebusItem } from '../../../model/XTextRebusItem';

@Component({
  selector: 'app-xtext-modal',
  templateUrl: './xtext-modal.component.html',
  styleUrls: ['./xtext-modal.component.scss'],
})
export class XTextModalComponent extends ModalComponent implements OnInit {
  strikeText: string;
  textControl: FormControl = new FormControl();
  xtextRebusItem: XTextRebusItem = {
    font: 'text',
    height: 200,
    width: 50,
    name: '',
    nameComponent: 'XTextComponent',
    size: null,
  };
  constructor(store: Store) {
    super(store);
  }

  ngOnInit(): void {
    this.textControl.valueChanges.subscribe((strikeText) => {
      this.strikeText = strikeText;
      this.strikeText.toUpperCase();
    });
  }

  addXTextRebusItemAndCloseModal() {
    this.xtextRebusItem.name = this.strikeText;
    super.sendModelToStore(this.xtextRebusItem);
    super.closeModal();
  }
}
