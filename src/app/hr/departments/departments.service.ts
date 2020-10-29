import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  constructor(private http:HttpClient) { }
  adddepartments(model : any):Observable<any> {
    return this.http.post(`${environment.Base_URL}adddepartments`,model)
  }

  listdepartments():Promise<any>{
    return this.http.get(`${environment.Base_URL}listdepartments`).toPromise()
  }

  getdepartmentsById(id: any):Promise<any>{
    return this.http.get(`${environment.Base_URL}getdepartmentsById/${id}`).toPromise();
  }
  updatedepartments(model: any): Observable<any> {
    return this.http.put(`${environment.Base_URL}updatedepartments`,model);
  }
  deletedepartments(did: number): Observable<any> {
    return this.http.delete(`${environment.Base_URL}deletedepartments/${did}`);
  }
}
