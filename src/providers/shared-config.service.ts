import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IConfig } from '../shared/config';



/*
  Generated class for the SharedConfigProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SharedConfigProvider {
  config: IConfig;
  constructor(public http: HttpClient) {
    console.log('Hello SharedConfigProvider Provider');
  }
  public loadConfig(): Promise<IConfig> {
    return new Promise(resolve => {
      this.http.get<IConfig>('assets/config/config.json')
        .subscribe(config => {
          this.config = config;
          resolve();
        });
    });
  }
}
