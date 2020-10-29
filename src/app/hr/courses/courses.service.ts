import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http:HttpClient) { }

  addcourses(model : any):Observable<any> {
    return this.http.post(`${environment.Base_URL}addcourses`,model)
  }

  listcourses():Promise<any>{
    return this.http.get(`${environment.Base_URL}listcourses`).toPromise()
  }

  getcoursesById(id: any):Promise<any>{
    return this.http.get(`${environment.Base_URL}getcoursesById/${id}`).toPromise();
  }
  updatecourses(model: any): Observable<any> {
    return this.http.put(`${environment.Base_URL}updatecourses`,model);
  }
  deletecourses(cid: number): Observable<any> {
    return this.http.delete(`${environment.Base_URL}deletecourses/${cid}`);
  }
}
