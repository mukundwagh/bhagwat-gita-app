import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ModalContentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-modal-content',
  templateUrl: 'modal-content.html',
})
export class ModalContentPage {

  public musicDetails;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log("music details" + this.navParams.get('data'));
    this.musicDetails = navParams.get('data');
    console.log("music details" + this.navParams.get('data'));
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalContentPage');
  }

}
