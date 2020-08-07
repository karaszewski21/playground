import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '../modal/modal-component';
import { Store } from '@ngrx/store';
import { ReplaceTextRebusItem } from '../../../model/ReplaceTextRebusItem';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-replace-text-modal',
  templateUrl: './replace-text-modal.component.html',
  styleUrls: ['./replace-text-modal.component.scss'],
})
export class ReplaceTextModalComponent extends ModalComponent
  implements OnInit {
  textLeftControl: FormControl = new FormControl();
  textRightControl: FormControl = new FormControl();

  replaceTextRebusItem: ReplaceTextRebusItem = {
    font: 'text',
    height: 200,
    width: 50,
    name: 'Zamien tekst',
    nameComponent: 'ReplaceTextComponent',
    size: null,
    leftText: '',
    rightText: '',
  };
  constructor(store: Store) {
    super(store);
  }

  ngOnInit(): void {
    this.textLeftControl.valueChanges.subscribe((leftText) => {
      this.replaceTextRebusItem.leftText = leftText;
    });
    this.textRightControl.valueChanges.subscribe((rightText) => {
      this.replaceTextRebusItem.rightText = rightText;
    });
  }

  addReplaceTextRebusItemAndCloseModal() {
    super.sendModelToStore(this.replaceTextRebusItem);
    super.closeModal();
  }
}
