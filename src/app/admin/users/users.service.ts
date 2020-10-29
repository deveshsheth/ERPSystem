import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  constructor(private http:HttpClient) { }
  addusers(model : any):Observable<any> {
    return this.http.post(`${environment.Base_URL}addusers`,model)
  }

  listusers():Promise<any>{
    return this.http.get(`${environment.Base_URL}listusers`).toPromise()
  }

  getusersById(id: any):Promise<any>{
    return this.http.get(`${environment.Base_URL}getusersById/${id}`).toPromise();
  }

  updateusers(model: any): Observable<any> {
    return this.http.put(`${environment.Base_URL}updateusers`,model);
  }
  
  deleteusers(empid: number): Observable<any> {
    return this.http.delete(`${environment.Base_URL}deleteusers/${empid}`);
  }
}
