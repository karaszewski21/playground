import { Crossword } from '../../../model/crossword';
import { State } from '@ngrx/store';
import { CrosswordActions, CreateCrossword, CrosswordActionTypes } from '..';

const initialState: Crossword = {
  crossword: [],
};

export function reducer(state = initialState, action: CrosswordActions) {
  switch (action.type) {
    case CrosswordActionTypes.Create: {
      return {
        ...state,
        selected: action.payload.password,
      };
    }

    case CrosswordActionTypes.CreateSuccess: {
      return {
        ...state,
        suggested: action.payload.crossword,
      };
    }

    default: {
      return state;
    }
  }
}
