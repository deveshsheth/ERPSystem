import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {map} from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http:HttpClient) { }

  addemployees(model : any):Observable<any> {
    return this.http.post(`${environment.Base_URL}addemployees`,model)
  }

  listemployees():Promise<any>{
    return this.http.get(`${environment.Base_URL}listemployees`).toPromise()
  }

  getemployeesById(id: any):Promise<any>{
    return this.http.get(`${environment.Base_URL}getemployeesById/${id}`).toPromise();
  }
  updateemployees(model: any): Observable<any> {
    return this.http.put(`${environment.Base_URL}updateemployees`,model);
  }
  deleteemployees(empid: number): Observable<any> {
    return this.http.delete(`${environment.Base_URL}deleteemployees/${empid}`);
  }

  postFile(fileToUpload:File): Observable<any> {
    const endpoint = environment.Base_URL + `upload`;
    const formData: FormData = new FormData();
    formData.append('image', fileToUpload,fileToUpload.name);
    return this.http.post(endpoint,formData)
    .pipe(map(i => {return i}));
  }
}
