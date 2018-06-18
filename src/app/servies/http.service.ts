import { Injectable } from '@angular/core';
import  { Http } from '@angular/http';



@Injectable({
  providedIn: 'root'
})


export class HttpService {
 constructor( private _http: Http) { 
 }

 public projectDetailsdata(){
 	let _url: string = 'https://profile.ibunty.com/project/2?_format=json'; 
 	this._http.get(_url);
 }

}
