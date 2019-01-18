import { MusicServiceProvider } from './../../providers/music-service/music-service';
import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import {ModalContentPage} from '../../pages/modal-content/modal-content';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  /*

  {
    "chapter_1": {
      "verse_1":{
        "lyrics":"",
        "music_filepath":""
      }
    }
  }

  */
  public musicCollection = [];
  constructor(public navCtrl: NavController, private musicService: MusicServiceProvider, private modalCtrl: ModalController) {
  this.musicService.getMusicCollection().subscribe(data=>{
    this.musicCollection=data["items"]
  });
  }

  getChapterKeys(){
    return Object.keys(this.musicCollection)
  }

  openModal(music){
    let modal = this.modalCtrl.create(ModalContentPage, music);
    console.log("open modal "+ music);
    modal.present();
  }

  toggleSection(i) {
    this.musicCollection[i].open = !this.musicCollection[i].open;
  }

}
