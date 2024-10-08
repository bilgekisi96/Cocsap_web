import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './batrack/components/body.component';
import { SidenavComponent } from './batrack/components/sidenav.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import { RealtimeComponent } from './batrack/components/realtime.component';
import { MonitoringComponent } from './batrack/components/monitoring.component';
import { HistoryComponent } from './batrack/components/history.component';
import {HashLocationStrategy, LocationStrategy, PathLocationStrategy} from "@angular/common";
import { MapComponent } from './batrack/components/map/map.component';
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { LoginComponent } from './batrack/components/login/login.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatCardModule} from "@angular/material/card";
import { MatFormFieldModule } from '@angular/material/form-field';
import { RegisterComponent } from './batrack/components/register/register.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { InformationComponent } from './batrack/components/information/information.component';
import { MovingButtonComponent } from './batrack/components/moving-button/moving-button.component';
import { LoopButtonComponent } from './batrack/components/loop-button/loop-button.component';
import { PagelemComponent } from './batrack/components/pagelem/pagelem.component';
import { PictureSwitcherComponent } from './batrack/components/picture-switcher/picture-switcher.component';
import { PaymentComponent } from './batrack/components/payment/payment.component';
import {InboxService} from "./batrack/services/inbox.service";
import {MatDialogActions, MatDialogModule} from "@angular/material/dialog";
import { SepetComponent } from './batrack/components/sepet.component';
import {MatBadgeModule} from '@angular/material/badge';


@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,

    RealtimeComponent,
    MonitoringComponent,

    HistoryComponent,
    MapComponent,
    LoginComponent,
    RegisterComponent,
    InformationComponent,
    MovingButtonComponent,
    LoopButtonComponent,
    PagelemComponent,
    PictureSwitcherComponent,
    PaymentComponent,
    SepetComponent

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatInputModule,
        FormsModule,
        MatIconModule,
        MatFormFieldModule,
        MatButtonModule,
        MatProgressSpinnerModule,
        MatCardModule,
        MatMenuModule,
        MatListModule,
        ReactiveFormsModule,
        MatToolbarModule,
        MatDialogModule,
        MatBadgeModule,


    ],
  providers:[{provide: LocationStrategy,useClass:HashLocationStrategy}],
  bootstrap: [AppComponent],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
