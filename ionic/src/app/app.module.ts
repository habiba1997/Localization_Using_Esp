import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SvgCircleModule, SvgLineModule, SvgPolygonModule, SvgPolylineModule, SvgTextModule, SvgPathModule, SvgEllipseModule } from 'angular-svg'
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './Services/http-service.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [  
    HttpClientModule,
    CommonModule, 
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    FormsModule, 
    SvgCircleModule, 
    SvgLineModule, 
    SvgPolygonModule, 
    SvgPolylineModule, 
    SvgTextModule, 
    SvgPathModule, 
    SvgEllipseModule],
  providers: [HttpService,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
