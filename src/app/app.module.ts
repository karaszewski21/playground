import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CrosswordModule } from './crossword/crossword.module';
import { RebusModule } from './rebus/rebus.module';
import { SharedModule } from './shared/shared.module';
import { StoreModule, Store } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CrosswordModule,
    RebusModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      name: 'Crossword DevTools',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
