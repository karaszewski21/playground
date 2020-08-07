import { Action } from '@ngrx/store';
import { IAccessRebusItem } from '../../model/interface/IAccessRebusItem';
import { IRebusItem } from '../../model/interface/IRebusItem';
import { Rebus } from '../../model/Rebus';

export enum RebusActionTypes {
  AccessRebusItem = 'get permissions to RebusItem [Rebus]',
  AccessRebusItemSuccess = 'get permissions is successfully [Rebus]',
  AddRebusItem = 'add RebusItem to list [Rebus]',
  AddRebusItemSuccess = 'RebusItem added to list successfully [Rebus]',
  AddRebus = 'add Rebus [Rebus]',
  AddPasswordRebus = 'add password to Rebus [Rebus]',
  ShowRebus = 'show passoword and creator Rebus [Rebus]',
  HiddenRebus = 'hidden passoword and creator Rebus [Rebus]',
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

export class AddRebus implements Action {
  readonly type = RebusActionTypes.AddRebus;
  constructor(
    public readonly payload: {
      rebus: Rebus;
    }
  ) {}
}

export class AddPasswordRebus implements Action {
  readonly type = RebusActionTypes.AddPasswordRebus;
  constructor(
    public readonly payload: {
      password: string;
    }
  ) {}
}
export class ShowRebus implements Action {
  readonly type = RebusActionTypes.ShowRebus;
  constructor(
    public readonly payload: {
      show: boolean;
    }
  ) {}
}
export class HiddenRebus implements Action {
  readonly type = RebusActionTypes.HiddenRebus;
  constructor(
    public readonly payload: {
      hidden: boolean;
    }
  ) {}
}

export type RebusAction =
  | AccessRebusItemSuccess
  | AccessRebusItem
  | AddRebusItem
  | AddRebusItemSuccess
  | AddRebus
  | AddPasswordRebus
  | ShowRebus
  | HiddenRebus;
