import { File } from '@ionic-native/file';
import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { Media,MediaObject } from '@ionic-native/media'

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
  public list_data;
  public verseDetails={};
  private songMedia : MediaObject = null;
  private isMusicPaused = false;
  constructor(private media:Media,public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController,private file : File) {
    console.log("music details" + typeof this.navParams.get('data'));
    this.verseDetails=navParams.get('data');
    console.log("music details" + this.verseDetails);
    this.file.listDir(this.file.applicationDirectory+'/www/','assets/').then(list=>{
      this.list_data=JSON.stringify(list);
    });
  }

  stopMusic(){
    if (this.songMedia !== null){
    this.songMedia.stop(); 
    this.songMedia.release();
    this.songMedia = null;
    }else{
      if(this.isMusicPaused ===true){
        this.songMedia.play
        this.isMusicPaused = false
      }
    }
  }

  playMusic(){
    if (this.songMedia === null){
      let path  = this.file.applicationDirectory + 'www/assets/music.opus';
      // this.file.listDir(this.file.dataDirectory,'www').then((result)=>{console.log("hiiii")});
      this.songMedia = this.media.create(path);
      console.log(path);
      
      

      this.songMedia.onStatusUpdate.subscribe(status => console.log(status)); // fires when file status changes

      this.songMedia.onSuccess.subscribe(() => console.log('Action is successful'));

      this.songMedia.onError.subscribe(error => console.error(JSON.stringify(error)));

      this.songMedia.play();
    } 
  }

  pauseMusic(){
    if (this.songMedia !== null){
      this.songMedia.pause(); 
      this.isMusicPaused = true;
    }  
  }



  dismiss() {
    this.viewCtrl.dismiss();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalContentPage');
  }

}
