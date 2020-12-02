import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { RemoteService } from './providers/remote-service.service';

//HTTP
import { HttpClientModule } from '@angular/common/http';

//Routes
import { AppRoutingModule } from './app-routing.module';

//Component
import { AppComponent } from './app.component';

//Storage
import { IonicStorageModule } from '@ionic/storage';

//Formularios
import { FormsModule } from '@angular/forms';
// //Geolocation Plugins
// import { Geolocation } from '@ionic-native/geolocation/ngx';
// import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), FormsModule, IonicStorageModule.forRoot(), AppRoutingModule, HttpClientModule,],
  providers: [
    RemoteService,
    StatusBar,
    SplashScreen,
    // Geolocation,
    // NativeGeocoder,

    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
