import { Injectable } from '@angular/core';
import { Crossword } from '../model/crossword';
import { CrosswordItem } from '../model/crosswordItem';

@Injectable({
  providedIn: 'root',
})
export class CrosswordService {
  constructor() {}

  firstGenerateCrossword(password: string) {
    let crosswordItems: CrosswordItem[] = [];
    let crossword: Crossword = {
      password: password,
      positionPassword: 0,
      widthLeft: 0,
      widthRight: 0,
    };

    [...password].forEach(() => {
      let crosswordItem: CrosswordItem = {
        anwser: '',
        question: '',
        positionPassword: 0,
        searchLetter: '',
      };

      crosswordItems.push(crosswordItem);
    });
    console.log({ crossword, crosswordItems });
    return { crossword, crosswordItems };
  }
}
