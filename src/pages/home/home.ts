import { MusicServiceProvider } from './../../providers/music-service/music-service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public musicCollection = [];
  constructor(public navCtrl: NavController, private musicService: MusicServiceProvider) {
  this.musicCollection = this.musicService.getMusicCollection();
  }



}
