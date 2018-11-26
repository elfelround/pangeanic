import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {ThingsApiService} from './things/things-api.service';
import { CreationformComponent } from './creationform/creationform.component';

@NgModule({
  declarations: [
    AppComponent,
    CreationformComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [ThingsApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
