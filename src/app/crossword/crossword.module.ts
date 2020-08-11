import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrosswordRoutingModule } from './crossword-routing.module';
import { CrosswordComponent } from './crossword.component';
import { CrosswordPasswordComponent } from './crossword-password/crossword-password.component';
import { CrosswordTableComponent } from './crossword-table/crossword-table.component';
import { CrosswordQuestionsComponent } from './crossword-questions/crossword-questions.component';
import { CrosswordQuestionComponent } from './crossword-question/crossword-question.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CrosswordEffects, reducer } from './store';
import { ReactiveFormsModule } from '@angular/forms';
import { CrosswordRowTableComponent } from './crossword-row-table/crossword-row-table.component';
import { CrosswordLetterQuestionComponent } from './crossword-letter-question/crossword-letter-question.component';
import { CrosswordNavComponent } from './crossword-nav/crossword-nav.component';
import { CrosswordHiddenComponent } from './crossword-hidden/crossword-hidden.component';
import { CrosswordCellTableComponent } from './crossword-cell-table/crossword-cell-table.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CrosswordComponent,
    CrosswordPasswordComponent,
    CrosswordTableComponent,
    CrosswordQuestionsComponent,
    CrosswordQuestionComponent,
    CrosswordRowTableComponent,
    CrosswordLetterQuestionComponent,
    CrosswordNavComponent,
    CrosswordHiddenComponent,
    CrosswordCellTableComponent,
  ],
  imports: [
    CommonModule,
    CrosswordRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    StoreModule.forFeature('crossword', reducer),
    EffectsModule.forFeature([CrosswordEffects]),
  ],
})
export class CrosswordModule {}
