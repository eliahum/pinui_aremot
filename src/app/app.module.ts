import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, APP_INITIALIZER } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PinuiAremotPage } from '../pages/pinui-aremot/pinui-aremot';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { GoogleMapPage } from '../pages/google-map/google-map';
import { PinuiAremotProvider } from '../providers/pinui-aremot.service';
import { GoogleMapProvider } from '../providers/google-map.service';
import { SharedConfigProvider } from '../providers/shared-config.service';


export function startupServiceConfig(startupService: SharedConfigProvider): Function {
  return () => startupService.loadConfig().then((result)=>{

    
  });
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    PinuiAremotPage,
    GoogleMapPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
			apiKey: 'AIzaSyD45f9hkuYUj8DxNrUN5T39qgKiRvorUgk'
		  })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    PinuiAremotPage,
    GoogleMapPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    { provide: APP_INITIALIZER, useFactory: startupServiceConfig, deps: [SharedConfigProvider], multi: true },
    SharedConfigProvider,
    PinuiAremotProvider,
    GoogleMapProvider
  ]
})
export class AppModule {}
