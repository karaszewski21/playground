import { Injectable } from '@angular/core';
import {
  CrosswordActionTypes,
  CreateSuccessCrossword,
  CreateCrossword,
} from '../actions/crossword';
import { CrosswordService } from '../../../service/crossword.service';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';

@Injectable()
export class CrosswordEffects {
  cossword: string[][];
  @Effect()
  createCrosswordByPassword$: Observable<Action> = this.actions$.pipe(
    ofType<CreateCrossword>(CrosswordActionTypes.Create),
    map((action) => action.payload.password),
    switchMap((password) =>
      this.crosswordService.firstGenerateCrossword(password)
    ),
    map((crossword) => new CreateSuccessCrossword({ crossword }))
  );

  constructor(
    private readonly actions$: Actions,
    private readonly crosswordService: CrosswordService
  ) {}
}
