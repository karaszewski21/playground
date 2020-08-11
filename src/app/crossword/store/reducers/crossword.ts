import { CrosswordActions, CreateCrossword, CrosswordActionTypes } from '..';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Crossword } from '../../model/crossword';
import { CrosswordItem } from '../../model/crosswordItem';

export interface State {
  crossword?: Crossword;
  crosswordItems: CrosswordItem[];
}

const initialState: State = {
  crosswordItems: [],
};

export function reducer(state = initialState, action: CrosswordActions) {
  switch (action.type) {
    case CrosswordActionTypes.CreateSuccess: {
      return {
        ...state,
        crossword: action.payload.crossword,
        crosswordItems: action.payload.crosswordItems,
      };
    }

    case CrosswordActionTypes.UpdateSuccess: {
      return {
        ...state,
        crossword: action.payload.crossword,
      };
    }

    case CrosswordActionTypes.AddCrosswordItemSuccess: {
      return {
        ...state,
        crosswordItems: action.payload.crosswordItems,
      };
    }

    case CrosswordActionTypes.HiddenAnserSuccess: {
      return {
        ...state,
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
  (state) => state?.crossword
);
export const getCrosswordItems = createSelector(
  getState,
  (state) => state?.crosswordItems
);
