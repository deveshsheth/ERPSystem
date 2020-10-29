import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IsloginService {

  constructor(private http:HttpClient) { }
islogin(){
  if(sessionStorage.getItem('islogin')) {
    return true;
  }
  return false;
}
}
