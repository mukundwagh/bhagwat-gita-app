import { MusicServiceProvider } from './../../providers/music-service/music-service';
import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import {ModalContentPage} from '../../pages/modal-content/modal-content'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public musicCollection = [];
  constructor(public navCtrl: NavController, private musicService: MusicServiceProvider, private modalCtrl: ModalController) {
  this.musicCollection = this.musicService.getMusicCollection();
  }

  openModal(music){
    let modal = this.modalCtrl.create(ModalContentPage, music);
    console.log("open modal "+ music);
    modal.present();
  }

}
