import { TestBed } from '@angular/core/testing';

import { CrosswordService } from './crossword.service';
import { Crossword } from '../model/crossword';
import { CrosswordItem } from '../model/crosswordItem';
import { Store, StoreModule } from '@ngrx/store';
import { reducer } from '../store';

describe('CrosswordService', () => {
  let service: CrosswordService;
  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({ crossword: reducer })],
    });
    service = TestBed.inject(CrosswordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be updated crossword', () => {
    let crossword: Crossword = {
      password: 'test',
      positionPassword: 1,
      widthLeft: 1,
      widthRight: 2,
    };

    let crosswordItem: CrosswordItem = {
      anwser: 'test',
      question: '',
      positionPassword: 0,
      searchLetter: 'T',
    };

    let crosswordExpect: Crossword = {
      password: 'test',
      positionPassword: 1,
      widthLeft: 1,
      widthRight: 3,
    };

    expect(service.updateCrossword(crosswordItem, crossword)).toEqual(
      crosswordExpect
    );
  });

  xit('should be generated row for crossword', () => {
    let crossword: Crossword = {
      password: 'test',
      positionPassword: 1,
      widthLeft: 0,
      widthRight: 2,
    };

    let crosswordItem: CrosswordItem = {
      anwser: 'test',
      question: '',
      positionPassword: 0,
      searchLetter: 'T',
    };

    let expectRow = ['', '', 'T', 'E', 'S', 'T', ''];
    expect(
      service.generateRowFromCrosswordItem(crosswordItem, crossword)
    ).toEqual(expectRow);
  });
});
