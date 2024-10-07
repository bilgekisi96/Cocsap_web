import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import {RealtimeComponent} from "./batrack/components/realtime.component";
import {MonitoringComponent} from "./batrack/components/monitoring.component";
import {HistoryComponent} from "./batrack/components/history.component";
import {MapComponent} from "./batrack/components/map/map.component";
import {LoginComponent} from "./batrack/components/login/login.component";
import {RegisterComponent} from "./batrack/components/register/register.component";
import {AuthGuard} from "./batrack/services/auth.guard"


const routes: Routes = [


      {path:'',pathMatch:'full',redirectTo:'login'},
      {path:'login',component:LoginComponent},
      {path:'register',component:RegisterComponent},

      {path:'realtime',component:RealtimeComponent},
      {path:'history',component:HistoryComponent,canActivate: [AuthGuard]},
      {path:'monitoring',component:MonitoringComponent,canActivate: [AuthGuard]},
      {path:'map',component:MapComponent,canActivate: [AuthGuard]}





];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:false})],
  exports: [RouterModule],
  providers:[]
})
export class AppRoutingModule {}

