import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

<<<<<<< HEAD

import {RealtimeComponent} from "./batrack/components/realtime.component";
import {MonitoringComponent} from "./batrack/components/monitoring.component";
import {HistoryComponent} from "./batrack/components/history.component";
import {MapComponent} from "./batrack/components/map/map.component";
import {LoginComponent} from "./batrack/components/login/login.component";
import {RegisterComponent} from "./batrack/components/register/register.component";

const routes: Routes = [

      {path:'login',component:LoginComponent},
      //{path:'',component:ApplayoutComponent},
      {path:'register',component:RegisterComponent},
      {path:'history',component:HistoryComponent},
      {path:'monitoring',component:MonitoringComponent},
      {path:'map',component:MapComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[]
})
export class AppRoutingModule {



}
=======
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
>>>>>>> 1a638437eca69f8c69b80856a63b3aaf442f6ced
