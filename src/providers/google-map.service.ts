import { SharedConfigProvider } from './shared-config.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { agmmarker } from '../shared/types';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the GoogleMapServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GoogleMapProvider {

  constructor(public http: HttpClient,
    private sharedConfig: SharedConfigProvider) {}

 public AddMarker(marker: agmmarker) : Observable<any> {
    
    const headers = new HttpHeaders().set("content-type", "application/json");
    return this.http.post(this.sharedConfig.config.addMarker,marker,{headers:headers}).pipe();

  }
  public DeleteMarkers() : Observable<any> {
    return this.http.post(this.sharedConfig.config.deleteMarkers,null).pipe();
  }
  public GetMarkers() : Observable<any> {
    return this.http.get(this.sharedConfig.config.getMarkers).pipe();
  }
}
