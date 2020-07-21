import { Injectable } from '@angular/core';
import { Crossword } from '../model/crossword';
import { CrosswordItem } from '../model/crosswordItem';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCrossword, getCrosswordItems } from '../store';

@Injectable({
  providedIn: 'root',
})
export class CrosswordService {
  crossword: Crossword;
  crosswordItems: CrosswordItem[];
  constructor(private store: Store) {
    this.store
      .select(getCrossword)
      .subscribe((crossword) => (this.crossword = crossword));

    this.store
      .select(getCrosswordItems)
      .subscribe(
        (getCrosswordItems) => (this.crosswordItems = getCrosswordItems)
      );
  }

  public firstGenerateCrossword(password: string): any {
    let crosswordItems: CrosswordItem[] = [];
    let crossword: Crossword = {
      password: password,
      positionPassword: 0,
      widthLeft: 0,
      widthRight: 0,
    };

    [...password].forEach((value) => {
      let crosswordItem: CrosswordItem = {
        anwser: '',
        question: '',
        positionPassword: 0,
        searchLetter: value,
      };

      crosswordItems.push(crosswordItem);
    });

    return { crossword, crosswordItems };
  }

  public generateRowFromCrosswordItem(crosswordItem: CrosswordItem): string[] {
    if (crosswordItem.anwser.length === 0) {
      return [...crosswordItem.searchLetter];
    } else {
      return [...crosswordItem.anwser];
    }
  }

  public updateCrossword(crosswordItem: CrosswordItem): Crossword {
    let crossword = this.crossword;
    let wLeft = crosswordItem.anwser.slice(0, crosswordItem.positionPassword)
      .length;

    let spaceForPassword = ++crosswordItem.positionPassword;

    let wRight = crosswordItem.anwser.slice(
      spaceForPassword,
      crosswordItem.anwser.length
    ).length;

    if (wLeft > crossword.widthLeft) {
      crossword.widthLeft = wLeft;
    }

    if (wRight > crossword.widthRight) {
      crossword.widthRight = wRight;
    }

    return crossword;
  }

  public addCrossItemToList(crosswordItem: CrosswordItem): CrosswordItem[] {
    let crosswordItems = this.crosswordItems;

    return crosswordItems;
  }
}
