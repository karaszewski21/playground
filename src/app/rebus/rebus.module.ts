import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RebusRoutingModule } from './rebus-routing.module';
import { RebusComponent } from './rebus/rebus.component';
import { RebusNavComponent } from './rebus-nav/rebus-nav.component';
import { RebusPasswordComponent } from './rebus-password/rebus-password.component';
import { RebusCreatorComponent } from './rebus-creator/rebus-creator.component';
import { RebusContnetComponent } from './rebus-contnet/rebus-contnet.component';


@NgModule({
  declarations: [RebusComponent, RebusNavComponent, RebusPasswordComponent, RebusCreatorComponent, RebusContnetComponent],
  imports: [
    CommonModule,
    RebusRoutingModule
  ]
})
export class RebusModule { }
