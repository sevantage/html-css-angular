import { NgModule, provideAppInitializer } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { DialogComponent } from './dialog/dialog.component';

function initializeApp(): Promise<any> {
  return new Promise(resolve =>
    setTimeout(resolve, 2000)
  );
}

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatListModule,
    MatButtonModule,
    MatDialogModule,
  ],
  providers: [provideAppInitializer(() => {
        const initializerFn = (() => initializeApp)();
        return initializerFn();
      })],
  bootstrap: [AppComponent]
})
export class AppModule { }
