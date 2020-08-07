import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IRebusItem } from '../../model/interface/IRebusItem';
import { Rebus } from '../../model/Rebus';
import { IAccessRebusItem } from '../../model/interface/IAccessRebusItem';
import { RebusActionTypes, RebusAction } from '../actions/rebus';

export interface State {
  rebus?: Rebus;
  rebusItems: IRebusItem[];
  accessRebusItem?: IAccessRebusItem[];
}

const initialState: State = {
  rebusItems: [],
  accessRebusItem: [],
};

export function reducer(state = initialState, action: RebusAction) {
  switch (action.type) {
    case RebusActionTypes.AccessRebusItemSuccess: {
      return {
        ...state,
        accessRebusItem: action.payload.accessRebusItem,
      };
    }

    case RebusActionTypes.AddRebusItem: {
      let rebusItems = [...state.rebusItems];
      rebusItems.push(action.payload.rebusItem);
      return {
        ...state,
        rebusItems: rebusItems,
      };
    }

    case RebusActionTypes.AddRebus: {
      return {
        ...state,
        rebus: action.payload.rebus,
      };
    }

    case RebusActionTypes.AddPasswordRebus: {
      let rebus = { ...state.rebus };
      rebus.password = action.payload.password;
      return {
        ...state,
        rebus: rebus,
      };
    }

    case RebusActionTypes.ShowRebus: {
      let rebus = { ...state.rebus };
      rebus.show = action.payload.show;
      return {
        ...state,
        rebus: rebus,
      };
    }

    case RebusActionTypes.HiddenRebus: {
      let rebus = { ...state.rebus };
      rebus.show = action.payload.hidden;
      return {
        ...state,
        rebus: rebus,
      };
    }

    default: {
      return state;
    }
  }
}

export const getState = createFeatureSelector<State>('rebus');

export const getRebus = createSelector(getState, (state) => state.rebus);

export const getRebusItems = createSelector(
  getState,
  (state) => state.rebusItems
);

export const getAccessRebusItems = createSelector(
  getState,
  (state) => state.accessRebusItem
);
