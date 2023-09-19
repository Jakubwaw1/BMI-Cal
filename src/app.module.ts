import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { bmicomponent } from './bmi.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, bmicomponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
