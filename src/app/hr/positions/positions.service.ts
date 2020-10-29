import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PositionsService {
  
  constructor(private http : HttpClient) { }

  addpositions(model : any):Observable<any> {
    return this.http.post(`${environment.Base_URL}addpositions`,model)
  }

  listpositions():Promise<any>{
    return this.http.get(`${environment.Base_URL}listpositions`).toPromise()
  }

  getpositionsById(id: any):Promise<any>{
    return this.http.get(`${environment.Base_URL}getpositionsById/${id}`).toPromise();
  }
  updatepositions(model: any): Observable<any> {
    return this.http.put(`${environment.Base_URL}updatepositions`,model);
  }
  deletepositions(posid: number): Observable<any> {
    return this.http.delete(`${environment.Base_URL}deletepositions/${posid}`);
  }

}
