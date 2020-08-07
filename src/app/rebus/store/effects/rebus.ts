import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { PermissionService } from '../../service/permission.service';
import {
  AccessRebusItem,
  RebusActionTypes,
  AccessRebusItemSuccess,
} from '../actions';

@Injectable()
export class RebusEffects {
  @Effect()
  createCrosswordByPassword$: Observable<Action> = this.actions$.pipe(
    ofType<AccessRebusItem>(RebusActionTypes.AccessRebusItem),
    map(() => this.permissionService.getPermissionToAccessRebusItems()),
    tap((accessRebusItem) => console.log(accessRebusItem)),
    map((accessRebusItem) => new AccessRebusItemSuccess({ accessRebusItem }))
  );

  //AddRebusItemSuccess

  constructor(
    private readonly actions$: Actions,
    private readonly permissionService: PermissionService
  ) {}
}
