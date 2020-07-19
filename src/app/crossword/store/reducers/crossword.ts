import { Crossword } from '../../../model/crossword';
import { CrosswordActions, CreateCrossword, CrosswordActionTypes } from '..';
import { CrosswordItem } from '../../../model/crosswordItem';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface State {
  crossword?: Crossword;
  crosswordItems: CrosswordItem[];
}

const initialState: State = {
  crosswordItems: [],
};

export function reducer(state = initialState, action: CrosswordActions) {
  switch (action.type) {
    // case CrosswordActionTypes.Create: {
    //   return {
    //     ...state,
    //     selected: action.payload.password,
    //   };
    // }

    case CrosswordActionTypes.CreateSuccess: {
      return {
        ...state,
        crossword: action.payload.crossword,
        crosswordItems: action.payload.crosswordItems,
      };
    }

    default: {
      return state;
    }
  }
}

export const getState = createFeatureSelector<State>('crossword');

export const getCrossword = createSelector(
  getState,
  (state) => state.crossword
);
export const getCrosswordItems = createSelector(
  getState,
  (state) => state.crosswordItems
);
