import { Injectable } from '@angular/core';
import {
  CrosswordActionTypes,
  CreateSuccessCrossword,
  CreateCrossword,
  UpdateSuccessCrossword,
  UpdateCrossword,
  AddCrosswordItem,
  AddCrosswordItemSuccess,
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
    ofType<CreateCrossword>(CrosswordActionTypes.Create),
    map((action) => action.payload.password),
    tap((password) => console.log(password)),
    map((password) => this.crosswordService.firstGenerateCrossword(password)),
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
    ofType<UpdateCrossword>(CrosswordActionTypes.AddCrosswordItem),
    map((action) => action.payload.crosswordItem),
    tap((crosswordItem) => console.log(crosswordItem)),
    map((crosswordItem) =>
      this.crosswordService.addCrossItemToList(crosswordItem)
    ),
    tap((crossword) => console.log(crossword)),
    map((crosswordItems) => new AddCrosswordItemSuccess({ crosswordItems }))
  );

  constructor(
    private readonly actions$: Actions,
    private readonly crosswordService: CrosswordService
  ) {}
}
