import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { ShowRebus, HiddenRebus } from '../store/actions/rebus';
import { getRebus } from '../store/reducers/rebus';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-rebus-toggle-mode',
  templateUrl: './rebus-toggle-mode.component.html',
  styleUrls: ['./rebus-toggle-mode.component.scss'],
})
export class RebusToggleModeComponent implements OnInit, OnDestroy {
  getRebusSubscription$: Subscription;
  textButton: string = 'Ukryj haslo';
  isButtonVisible: boolean = false;
  toggleMode: boolean = true;
  isInputPassword: boolean = false;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.getRebusSubscription$ = this.store
      .select(getRebus)
      .subscribe(({ password }) => {
        password === ''
          ? (this.isButtonVisible = false)
          : (this.isButtonVisible = true);
      });
  }

  toggleModeRebus(): void {
    this.checkInputPassword();

    if (this.isInputPassword) {
      this.toggleMode = !this.toggleMode;

      if (this.toggleMode) {
        this.textButton = 'Ukryj haslo';
        let show = this.toggleMode;
        this.store.dispatch(new ShowRebus({ show }));
      } else {
        this.textButton = 'Powrot do kreatora';
        let hidden = this.toggleMode;
        this.store.dispatch(new HiddenRebus({ hidden }));
      }
    }
  }

  checkInputPassword(): void {
    this.store.select(getRebus).subscribe(({ password }) => {
      if (password === '') {
        this.isInputPassword = false;
        alert('rebus nie ma wprowadzono hasla');
      } else {
        this.isInputPassword = true;
      }
    });
  }

  ngOnDestroy(): void {
    this.getRebusSubscription$.unsubscribe();
  }
}
