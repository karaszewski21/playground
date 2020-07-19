import { Action } from '@ngrx/store';
import { Crossword } from '../../model/crossword';
import { CrosswordItem } from '../../model/crosswordItem';

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
  constructor(
    public readonly payload: {
      crossword: Crossword;
      crosswordItems: CrosswordItem[];
    }
  ) {}
}

export type CrosswordActions = CreateCrossword | CreateSuccessCrossword;
