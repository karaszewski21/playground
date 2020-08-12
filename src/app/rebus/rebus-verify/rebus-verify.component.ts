import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormControl } from '@angular/forms';
import { getRebus } from '../store/reducers/rebus';
import { Observable, Subscription } from 'rxjs';
import { switchMap, debounceTime, tap, switchMapTo } from 'rxjs/operators';
import { Rebus } from '../model/Rebus';

@Component({
  selector: 'app-rebus-verify',
  templateUrl: './rebus-verify.component.html',
  styleUrls: ['./rebus-verify.component.scss'],
})
export class RebusVerifyComponent implements OnInit, OnDestroy {
  rebusSubscription$: Subscription;
  rebus$: Observable<Rebus>;
  checkedPassword: FormControl = new FormControl();
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.rebusSubscription$ = this.store
      .select(getRebus)
      .subscribe(({ password }) => {
        this.checkedPassword.valueChanges
          .pipe(debounceTime(1000))
          .subscribe((checkedPassword) => {
            password === checkedPassword
              ? alert('Haslo zostalo odgadniete')
              : alert('Niepoprawne haslo, sprobuj ponownie');
          });
      });
  }

  ngOnDestroy(): void {
    this.rebusSubscription$.unsubscribe();
  }
}
