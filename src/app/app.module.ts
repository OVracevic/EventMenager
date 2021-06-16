import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { KalendarComponent } from './kalendar/kalendar.component';
import { DanInfoComponent } from './dan-info/dan-info.component';
import { LogInTabComponent } from './log-in-tab/log-in-tab.component';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    KalendarComponent,
    DanInfoComponent,
    LogInTabComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export interface Hero {
  id: number;
  name: string;
}
