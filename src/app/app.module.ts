import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { DrinkComponent } from './components/drink/drink.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmComponent } from './components/confirm/confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DrinkComponent,
    ConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [],
  entryComponents:[DrinkComponent,ConfirmComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
