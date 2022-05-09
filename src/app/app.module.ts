import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddLeaveComponent } from './components/add-leave/add-leave.component';
import { ViewLeaveComponent } from './components/view-leave/view-leave.component';
import { DetailsLeaveComponent } from './components/details-leave/details-leave.component';
import { AngularPrimengModule } from './core/angular-primeng/angular-primeng.module';
import { AngularMaterialModule } from './core/angular-material/angular-material.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddLeaveComponent,
    ViewLeaveComponent,
    DetailsLeaveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AngularPrimengModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
