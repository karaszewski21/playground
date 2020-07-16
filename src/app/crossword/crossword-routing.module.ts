import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrosswordComponent } from './crossword.component';

const routes: Routes = [
  {
    path: 'crossword',
    component: CrosswordComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrosswordRoutingModule {}
