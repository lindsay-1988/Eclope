import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ParametresService {

  url= 'https://quiet-gorge-56637.herokuapp.com/parametres';

  constructor(private http : HttpClient) { }

  getAllParametres(){
    return this.http.get(this.url);
  }

  getParametresById(id){
    return this.http.get(this.url+"/"+id);
  }
}
