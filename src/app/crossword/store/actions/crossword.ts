import { Action } from '@ngrx/store';

export enum CrosswordActionTypes {
  Create = 'Tworzenie krzyzowki [Crossword]',
  CreateSuccess = 'Tworzenie krzyzowki [Crossword] powiodło się',
}

export class CreateCrossword implements Action {
  readonly type = CrosswordActionTypes.Create;
  constructor(public readonly payload: { password: string }) {}
}

export class CreateSuccessCrossword implements Action {
  readonly type = CrosswordActionTypes.CreateSuccess;
  constructor(public readonly payload: { crossword: string[] }) {}
}

export type CrosswordActions = CreateCrossword | CreateSuccessCrossword;
