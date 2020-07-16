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

@NgModule({
  declarations: [
    CrosswordComponent,
    CrosswordPasswordComponent,
    CrosswordTableComponent,
    CrosswordQuestionsComponent,
    CrosswordQuestionComponent,
  ],
  imports: [
    CommonModule,
    CrosswordRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ crossword: reducer }),
    EffectsModule.forRoot([CrosswordEffects]),
  ],
})
export class CrosswordModule {}
