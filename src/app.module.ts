import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BmicalcComponent } from './bmi.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, BmicalcComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
