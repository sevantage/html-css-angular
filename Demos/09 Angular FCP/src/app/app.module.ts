import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

function initializeApp(): Promise<any> {
  return new Promise(resolve =>
    setTimeout(resolve, 2000)
  );
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: () => initializeApp,
    multi: true
   }],
  bootstrap: [AppComponent]
})
export class AppModule { }
