import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalComponent } from '../modal/modal-component';
import { Store } from '@ngrx/store';
import { FormControl } from '@angular/forms';
import { XTextRebusItem } from '../../../model/XTextRebusItem';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-xtext-modal',
  templateUrl: './xtext-modal.component.html',
  styleUrls: ['./xtext-modal.component.scss'],
})
export class XTextModalComponent extends ModalComponent
  implements OnInit, OnDestroy {
  textControlSubscription$: Subscription;
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
    this.textControlSubscription$ = this.textControl.valueChanges.subscribe(
      (strikeText: string) => {
        this.strikeText = strikeText.toUpperCase();
      }
    );
  }

  addXTextRebusItemAndCloseModal() {
    this.xtextRebusItem.name = this.strikeText;
    super.sendModelToStore(this.xtextRebusItem);
    super.closeModal();
  }

  ngOnDestroy(): void {
    this.textControlSubscription$.unsubscribe();
  }
}
