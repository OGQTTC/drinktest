import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MaterialModule } from './material.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [PageNotFoundComponent,NavbarComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule
  ],
  exports:[
    PageNotFoundComponent,
    NavbarComponent,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class SharedModule { }
