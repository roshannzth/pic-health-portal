import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MainCardsComponent } from './components/main-cards/main-cards.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
    /* Route objects */
    {path: "", redirectTo:'home', pathMatch:'full'},
    {path:"home", component:HomeComponent, children:[
      {path:"login", component:LoginComponent},
      {path:"signup", component:SignupComponent}
    ]},
    {path:"main-cards", component:MainCardsComponent, children:[
      {path:"calculators", loadChildren: ()=>import('./calculators/calculators.module').then(m=>m.CalculatorsModule)}
    ]}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }