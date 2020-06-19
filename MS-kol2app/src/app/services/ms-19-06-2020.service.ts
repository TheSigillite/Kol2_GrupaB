import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MS19062020Service {

  private url = 'https://kol2tai.herokuapp.com';
  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(this.url + '/api/forum/posts');
  }

  getById(id: any){
    return this.http.get(this.url + '/api/forum/posts/' + id);
  }
}
