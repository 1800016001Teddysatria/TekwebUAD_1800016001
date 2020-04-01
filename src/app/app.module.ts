import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { Praktikum1Component } from './pages/praktikum1/praktikum1.component';
import { Praktikum2Component } from './pages/praktikum2/praktikum2.component';
import { Praktikum3Component } from './pages/praktikum3/praktikum3.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Praktikum1Component,
    Praktikum2Component,
    Praktikum3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
