import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the MusicServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MusicServiceProvider {
  constructor(public http: HttpClient) {
    console.log('Hello MusicServiceProvider Provider');
  }

  getMusicCollection(){
    return this.http.get('assets/data/gita.json').map(res=>res);
  }


  
}
