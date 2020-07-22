import { Action } from '@ngrx/store';
import { Crossword } from '../../model/crossword';
import { CrosswordItem } from '../../model/crosswordItem';

export enum CrosswordActionTypes {
  Create = 'creating crossword [Crossword]',
  CreateSuccess = 'creating crossword is successfully [Crossword]',
  Update = 'updating crossword [Crossword]',
  UpdateSuccess = 'update crossword is successfully [Crossword]',
  AddCrosswordItem = 'add crosswordItem to crossword [Crossword]',
  AddCrosswordItemSuccess = 'crosswordItem added to crossword successfully [Crossword]',
  HiddenAnser = 'hidding answer in crossword [Crossword]',
  HiddenAnserSuccess = 'hiddrn answer in crossword [Crossword]',
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

export class UpdateCrossword implements Action {
  readonly type = CrosswordActionTypes.Update;
  constructor(public readonly payload: { crosswordItem: CrosswordItem }) {}
}

export class UpdateSuccessCrossword implements Action {
  readonly type = CrosswordActionTypes.UpdateSuccess;
  constructor(public readonly payload: { crossword: Crossword }) {}
}

export class AddCrosswordItem implements Action {
  readonly type = CrosswordActionTypes.AddCrosswordItem;
  constructor(
    public readonly payload: {
      position: number;
      hidden: boolean;
      crosswordItem: CrosswordItem;
    }
  ) {}
}

export class AddCrosswordItemSuccess implements Action {
  readonly type = CrosswordActionTypes.AddCrosswordItemSuccess;
  constructor(public readonly payload: { crosswordItems: CrosswordItem[] }) {}
}

export class ModeHidden implements Action {
  readonly type = CrosswordActionTypes.HiddenAnser;
  constructor(public readonly payload: { mode: boolean }) {}
}

export class ModeHiddenSuccess implements Action {
  readonly type = CrosswordActionTypes.HiddenAnserSuccess;
  constructor(public readonly payload: { crosswordItems: CrosswordItem[] }) {}
}
export type CrosswordActions =
  | CreateCrossword
  | CreateSuccessCrossword
  | UpdateCrossword
  | UpdateSuccessCrossword
  | AddCrosswordItem
  | AddCrosswordItemSuccess
  | ModeHidden
  | ModeHiddenSuccess;
