import { Action } from '@ngrx/store';
import { IAccessRebusItem } from '../../model/interface/IAccessRebusItem';
import { IRebusItem } from '../../model/interface/IRebusItem';

export enum RebusActionTypes {
  AccessRebusItem = 'get permissions to RebusItem [Rebus]',
  AccessRebusItemSuccess = 'get permissions is successfully [Rebus]',
  AddRebusItem = 'add RebusItem to list[Rebus]',
  AddRebusItemSuccess = 'RebusItem added to list successfully [Rebus]',
}

export class AccessRebusItem implements Action {
  readonly type = RebusActionTypes.AccessRebusItem;
  constructor() {}
}

export class AccessRebusItemSuccess implements Action {
  readonly type = RebusActionTypes.AccessRebusItemSuccess;
  constructor(
    public readonly payload: {
      accessRebusItem: IAccessRebusItem[];
    }
  ) {}
}

export class AddRebusItem implements Action {
  readonly type = RebusActionTypes.AddRebusItem;
  constructor(
    public readonly payload: {
      rebusItem: IRebusItem;
    }
  ) {}
}

export class AddRebusItemSuccess implements Action {
  readonly type = RebusActionTypes.AddRebusItemSuccess;
  constructor(
    public readonly payload: {
      rebusItem: IRebusItem[];
    }
  ) {}
}

export type RebusAction =
  | AccessRebusItemSuccess
  | AccessRebusItem
  | AddRebusItem
  | AddRebusItemSuccess;
