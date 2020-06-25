import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FlotModule } from 'ng2modules-flot';
import { ChartsModule } from 'ng2-charts';
import {TableModule} from 'primeng/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { LayoutComponent } from './layout/layout.component';
import { LibdashComponent } from './libdash/libdash.component';
import { BooksComponent } from './books/books.component';
import { MembersComponent } from './members/members.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    HomeComponent,
    LoginComponent,
    LayoutComponent,
    LibdashComponent,
    BooksComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    FlotModule,
    ChartsModule,
    TableModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
