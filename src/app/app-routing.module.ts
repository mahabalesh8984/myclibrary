import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { LibdashComponent } from './libdash/libdash.component';
import { BooksComponent } from './books/books.component';
import { MembersComponent } from './members/members.component';


const routes: Routes = [
  {path: '',  redirectTo: 'login', pathMatch: 'full' } ,
  { path: 'login', component: LoginComponent },

  {
    path: 'app', component: LayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: 'dash', component: DashboardComponent  } ,
      { path: 'libdash', component: LibdashComponent  },
      { path: 'books', component: BooksComponent  },
      { path: 'members', component: MembersComponent  }
    ]}
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
