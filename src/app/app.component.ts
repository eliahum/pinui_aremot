import { SharedConfigProvider } from './../providers/shared-config.service';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { PinuiAremotPage } from '../pages/pinui-aremot/pinui-aremot';

import { HttpClient } from '@angular/common/http';
import { IConfig } from '../shared/config';
import { GoogleMapPage } from '../pages/google-map/google-map';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
    private sharedConfig:SharedConfigProvider,
    private http:HttpClient
    ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'פינוי ערימות', component: PinuiAremotPage },
      { title: 'מפות', component: GoogleMapPage }
    ];

  }
  public loadConfig(): Promise<IConfig> {
    return new Promise(resolve => {
        this.http.get<IConfig>('assets/config/config.json')
            .subscribe(config => {
                this.sharedConfig.config = config;
                resolve();
            });
    });
}
  initializeApp() {
    this.platform.ready().then(() => {
      //this.loadConfig();
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
