import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';

import { Injectable } from '@angular/core';
//import { SharedConfigProvider } from '../shared-config/shared-config';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operator/map';
import { Observable } from 'rxjs/Observable';
import { SharedConfigProvider } from './shared-config.service';


/*
  Generated class for the PinuiAremotProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PinuiAremotProvider {

  constructor(public http: HttpClient,
    private sharedConfig: SharedConfigProvider) {
    console.log('Hello PinuiAremotProvider Provider');
  }
  public GetPinuiAremot(): Observable<any> {


    return this.http.get(this.sharedConfig.config.getPinuiAremot).pipe();

  }
  public UpdateIonicPinui(id: number) : Observable<any> {
    
    const headers = new HttpHeaders().set("content-type", "application/json");
    var dt = {
      id: id
    };
    //return this.http.post(this.sharedConfig.config.updateIonicPinui,dt,{headers : httpOptions}).pipe();
    
    return this.http.post(this.sharedConfig.config.updateIonicPinui, dt,{headers:headers});

  }
  public ResetIonicPinui() : Observable<any> {
    return this.http.post(this.sharedConfig.config.resetIonicPinui,null).pipe();
  }
}
