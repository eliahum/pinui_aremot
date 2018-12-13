import { agmmarker } from './../../shared/types';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GoogleMapProvider } from '../../providers/google-map.service';

/**
 * Generated class for the GoogleMapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-google-map',
  templateUrl: 'google-map.html',
})
export class GoogleMapPage implements OnInit {
  ngOnInit(): void {
   
  }
  title: string = 'My first AGM project';
  lat: number = 31.96149497379315;
  lng: number = 34.821562349041415;
  public points: agmmarker[]=[];
  public agmMarkers: agmmarker[] = [
    {
      lat: 31.96149497379315,
      lng: 34.821562349041415
    }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private googleService: GoogleMapProvider) {
  }
  addMarker(lat:number,lng:number){
    this.googleService.AddMarker({ lat: lat,
      lng: lng}).subscribe((result)=>{
      },(error)=>{
        alert(error);
      });
    this.agmMarkers.push({
      lat: lat,
      lng: lng
    });
  }
  OnChooseLocation(event) {
    this.addMarker( event.coords.lat, event.coords.lng);
  }
  private rebuildPolylines() {
  }
  delete(){
    this.agmMarkers=[];
    this.points=[];
    this.googleService.DeleteMarkers().subscribe(()=>{});
  }
  clear(){
    this.agmMarkers=[];
    this.points=[];
    //this.googleService.DeleteMarkers().subscribe(()=>{});
  }
  reload(){
    this.googleService.GetMarkers().subscribe((result)=>{
      this.agmMarkers=result;
    });
  }
  polygonPaint() {
    this.points=[];
    this.agmMarkers.forEach((row) => {
      this.points.push(
        {
          lat: row.lat,
          lng: row.lng
        }
      );
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GoogleMapPage');
    this.addMarker(this.lat,this.lng);
  }

}
