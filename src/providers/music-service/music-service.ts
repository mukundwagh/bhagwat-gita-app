import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MusicServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MusicServiceProvider {

  private musicCollection = []
  constructor(public http: HttpClient) {
    console.log('Hello MusicServiceProvider Provider');
  }

  getMusicCollection(){
    this.musicCollection = ['geet 1','geet 2','geet 3','geet 4','geet 5','geet 6'];
    return this.musicCollection;
  }

}
