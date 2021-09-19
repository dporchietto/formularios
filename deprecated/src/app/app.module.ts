import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserFormComponent } from './formulario/form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module'
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    Observable
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
