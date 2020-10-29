import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Info } from '../info';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {
  
  constructor(private http:HttpClient) { }

  addbatches(model : any):Observable<any> {
    return this.http.post(`${environment.Base_URL}addbatches`,model)
  }

  listbatches():Promise<any>{
    return this.http.get(`${environment.Base_URL}listbatches`).toPromise()
  }

  getbatchesById(id: any):Promise<any>{
    return this.http.get(`${environment.Base_URL}getbatchesById/${id}`).toPromise();
  }

  updatebatches(model: any): Observable<any> {
    return this.http.put(`${environment.Base_URL}updatebatches`,model);
  }

  deletebatches(bid: number): Observable<any> {
    return this.http.delete(`${environment.Base_URL}deletebatches/${bid}`);
  }

  getBatchUserId(id: number):Promise<any>{
    return this.http.get(`${environment.Base_URL}getBatchUserId/${id}`).toPromise();
  }

  getmanagebatchstudent(bid: number):Promise<any>{
    return this.http.get(`${environment.Base_URL}getmanagebatchstudent/${bid}`).toPromise();
  }

  sendEmail(obj): Observable<Info> {
    return this.http.post<Info>('http://localhost:9100/sendFormData', obj)
  }

  getemailstudent(id: number):Promise<any> {
    return this.http.get(`${environment.Base_URL}getemailstudent/${id}`).toPromise();
  }

  addsession(model :any):Observable<any> {
    return this.http.post(`${environment.Base_URL}addsession`,model);
  }
  
  getsessionbyid(id : number):Promise<any> {
    return this.http.get(`${environment.Base_URL}getsessionsbyid/${id}`).toPromise();
  }

  deletetimetable(id: number): Observable<any> {
    return this.http.delete(`${environment.Base_URL}deletetimetable/${id}`);
  }

}
