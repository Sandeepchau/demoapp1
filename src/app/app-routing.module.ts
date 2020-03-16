import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { BanksComponent } from './banks/banks.component';
import { AppComponent } from './app.component';


const routes: Routes = [
      { path: 'users', component: UsersComponent },
      { path: 'banks', component: BanksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
