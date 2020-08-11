import { Injectable } from '@angular/core';
import {
  CrosswordActionTypes,
  CreateSuccessCrossword,
  CreateCrossword,
  UpdateSuccessCrossword,
  UpdateCrossword,
  AddCrosswordItem,
  AddCrosswordItemSuccess,
  ModeHiddenSuccess,
  ModeHidden,
} from '../actions/crossword';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { CrosswordService } from '../../service/crossword.service';

@Injectable()
export class CrosswordEffects {
  @Effect()
  createCrosswordByPassword$: Observable<Action> = this.actions$.pipe(
    tap((password) => console.log(password)),
    ofType<CreateCrossword>(CrosswordActionTypes.Create),
    map((action) => action.payload.password),
    tap((password) => console.log(password)),
    map((password) => this.crosswordService.generateFirstCrossword(password)),
    tap((crossword) => console.log(crossword)),
    map(
      ({ crossword, crosswordItems }) =>
        new CreateSuccessCrossword({ crossword, crosswordItems })
    )
  );

  @Effect()
  updateCrossword$: Observable<Action> = this.actions$.pipe(
    ofType<UpdateCrossword>(CrosswordActionTypes.Update),
    map((action) => action.payload.crosswordItem),
    tap((crosswordItem) => console.log(crosswordItem)),
    map((crosswordItem) =>
      this.crosswordService.updateCrossword(crosswordItem)
    ),
    tap((crossword) => console.log(crossword)),
    map((crossword) => new UpdateSuccessCrossword({ crossword }))
  );

  @Effect()
  addCrosswordItem$: Observable<Action> = this.actions$.pipe(
    ofType<AddCrosswordItem>(CrosswordActionTypes.AddCrosswordItem),
    map((action) => action.payload),
    tap((payload) => console.log(payload)),
    map(({ position, hidden, crosswordItem }) =>
      this.crosswordService.updateCrossItemsList(
        position,
        hidden,
        crosswordItem
      )
    ),
    tap((crosswordItems) => console.log(crosswordItems)),
    map((crosswordItems) => new AddCrosswordItemSuccess({ crosswordItems }))
  );

  @Effect()
  enableModeHidden$: Observable<Action> = this.actions$.pipe(
    ofType<ModeHidden>(CrosswordActionTypes.HiddenAnser),
    map((action) => action.payload.mode),
    tap((payload) => console.log(payload)),
    map((mode) => this.crosswordService.hiddenAnswersForCrossword(mode)),
    tap((crosswordItems) => console.log(crosswordItems)),
    map((crosswordItems) => new ModeHiddenSuccess({ crosswordItems }))
  );

  constructor(
    private readonly actions$: Actions,
    private readonly crosswordService: CrosswordService
  ) {}
}
