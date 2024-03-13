import { APP_INITIALIZER, NgModule } from '@angular/core';
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
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: () => initializeApp,
    multi: true
   }],
  bootstrap: [AppComponent]
})
export class AppModule { }
