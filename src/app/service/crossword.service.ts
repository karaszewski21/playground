import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CrosswordService {
  constructor() {}

  firstGenerateCrossword(password: string): string[][] {
    let crossword: string[][] = [];

    for (const letter of password) {
      let letterUpper = letter.toUpperCase();
      crossword.push([letterUpper]);
    }
    return crossword;
  }
}
