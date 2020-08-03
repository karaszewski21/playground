import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CrosswordModule } from './crossword/crossword.module';
import { RebusModule } from './rebus/rebus.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CrosswordModule,
    RebusModule,
    ReactiveFormsModule,
    StoreDevtoolsModule.instrument({
      name: 'Crossword DevTools',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
