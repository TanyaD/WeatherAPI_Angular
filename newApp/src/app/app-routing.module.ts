import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DallasComponent } from './dallas/dallas.component';
import { SeattleComponent } from './seattle/seattle.component';
import { SanComponent } from './san/san.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { WashingtonComponent } from './washington/washington.component';
import { BurbankComponent } from './burbank/burbank.component';

const routes: Routes = [
  {path: 'dallas', component:DallasComponent},
  {path: 'seattle', component:SeattleComponent},
  {path: 'san', component:SanComponent},
  {path: 'chicago', component:ChicagoComponent},
  {path: 'washington',pathMatch: 'full', component:WashingtonComponent, children: []},
  {path:'burbank', component:BurbankComponent},
  {path: '', component:SanComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
