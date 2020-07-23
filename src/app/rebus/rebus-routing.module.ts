import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RebusComponent } from './rebus/rebus.component';

const routes: Routes = [
  {
    path: 'rebus',
    component: RebusComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RebusRoutingModule {}
