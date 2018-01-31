import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule }  from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { Observable } from "rxjs/Rx";
import { AppComponent } from './app.component';
import { SeattleComponent } from './seattle/seattle.component';
import { SanComponent } from './san/san.component';
import { DallasComponent } from './dallas/dallas.component';
import { WashingtonComponent } from './washington/washington.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { BurbankComponent } from './burbank/burbank.component';


@NgModule({
  declarations: [
    AppComponent,
    SeattleComponent,
    SanComponent,
    DallasComponent,
    WashingtonComponent,
    ChicagoComponent,
    BurbankComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
  ],
  providers: [
    [HttpService]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
