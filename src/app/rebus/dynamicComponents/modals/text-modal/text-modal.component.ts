import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '../modal/modal-component';
import { Store } from '@ngrx/store';
import { FormControl } from '@angular/forms';
import { TextRebusItem } from '../../../model/TextRebusItem';

@Component({
  selector: 'app-text-modal',
  templateUrl: './text-modal.component.html',
  styleUrls: ['./text-modal.component.scss'],
})
export class TextModalComponent extends ModalComponent implements OnInit {
  textControl: FormControl = new FormControl();
  text: string;
  textRebusItem: TextRebusItem = {
    font: 'text',
    height: 200,
    width: 50,
    name: '',
    nameComponent: 'TextComponent',
    size: null,
  };

  constructor(store: Store) {
    super(store);
  }

  ngOnInit(): void {
    this.textControl.valueChanges.subscribe((text: string) => {
      this.text = text.toUpperCase();
    });
  }

  addTextRebusItemAndCloseModal() {
    this.textRebusItem.name = this.text;
    super.sendModelToStore(this.textRebusItem);
    super.closeModal();
  }
}
