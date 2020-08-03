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

    case RebusActionTypes.AddRebusItemSuccess: {
      return {
        ...state,
        rebusItems: action.payload.rebusItem,
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
