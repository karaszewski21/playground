import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RebusVerifyComponent } from './rebus-verify/rebus-verify.component';
import { RebusRoutingModule } from './rebus-routing.module';
import { RebusComponent } from './rebus/rebus.component';
import { RebusNavComponent } from './rebus-nav/rebus-nav.component';
import { RebusPasswordComponent } from './rebus-password/rebus-password.component';
import { RebusCreatorComponent } from './rebus-creator/rebus-creator.component';
import { RebusContnetComponent } from './rebus-contnet/rebus-contnet.component';
import { PlusComponent } from './dynamicComponents/rebusItems/plus/plus.component';
import { TextComponent } from './dynamicComponents/rebusItems/text/text.component';
import { ReplaceTextComponent } from './dynamicComponents/rebusItems/replace-text/replace-text.component';
import { ImageComponent } from './dynamicComponents/rebusItems/image/image.component';
import { XTextComponent } from './dynamicComponents/rebusItems/xtext/xtext.component';
import { XTextModalComponent } from './dynamicComponents/modals/xtext-modal/xtext-modal.component';
import { TextModalComponent } from './dynamicComponents/modals/text-modal/text-modal.component';
import { ReplaceTextModalComponent } from './dynamicComponents/modals/replace-text-modal/replace-text-modal.component';
import { ImageModalComponent } from './dynamicComponents/modals/image-modal/image-modal.component';
import { FactoryComponent } from './factory/factory.component';
import { FactoryDirective } from './factory/factory.directive';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/reducers/rebus';
import { EffectsModule } from '@ngrx/effects';
import { RebusEffects } from './store/effects/rebus';
import { RebusItemsComponent } from './rebus-items/rebus-items.component';
import { SharedModule } from '../shared/shared.module';
import { RebusToggleModeComponent } from './rebus-toggle-mode/rebus-toggle-mode.component';

@NgModule({
  declarations: [
    RebusVerifyComponent,
    RebusItemsComponent,
    RebusComponent,
    RebusNavComponent,
    RebusPasswordComponent,
    RebusCreatorComponent,
    RebusContnetComponent,
    FactoryComponent,
    PlusComponent,
    TextComponent,
    ReplaceTextComponent,
    ImageComponent,
    XTextComponent,
    XTextModalComponent,
    TextModalComponent,
    ReplaceTextModalComponent,
    ImageModalComponent,
    FactoryDirective,
    RebusToggleModeComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RebusRoutingModule,
    StoreModule.forRoot({ rebus: reducer }),
    EffectsModule.forRoot([RebusEffects]),
  ],
  entryComponents: [
    PlusComponent,
    TextComponent,
    ReplaceTextComponent,
    ImageComponent,
    XTextComponent,
    XTextModalComponent,
    TextModalComponent,
    ReplaceTextModalComponent,
    ImageModalComponent,
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class RebusModule {}
