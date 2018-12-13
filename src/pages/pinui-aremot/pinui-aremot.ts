import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { IPinui } from '../../shared/types';
import { PinuiAremotProvider } from '../../providers/pinui-aremot.service';



/**
 * Generated class for the PinuiAremotPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pinui-aremot',
  templateUrl: 'pinui-aremot.html',
})
export class PinuiAremotPage implements OnInit  {

  refresh(){
    this.pinuiSrv.GetPinuiAremot().subscribe((result) => {
      this.pinuiim = result;
      this.pinuiVisible = true;
    });    
  }
  ngOnInit(): void {
  this.refresh();
  }
  pinuiim: Array<IPinui>;
  pinuiVisible: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private pinuiSrv: PinuiAremotProvider,
    private toastCtrl: ToastController
  ) {
  }
  updatePinui(pinui: IPinui) {
    this.pinuiSrv.UpdateIonicPinui(pinui.id).subscribe((result) => { 
      
      let toast = this.toastCtrl.create({
        message: 'נשמר בהצלחה',
        duration: 1500,
        position: 'middle',
        cssClass:'normalToast'
      });
    
  
    
      toast.present();
      this.refresh();

    });
  }
  reset() {
    this.pinuiSrv.ResetIonicPinui().subscribe(() => {
this.refresh();

     });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PinuiAremotPage');
  }
}
