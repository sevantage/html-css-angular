import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

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
