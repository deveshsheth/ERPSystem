import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { promise } from 'protractor';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http:HttpClient) { }

  countstudent():Promise<any>{
    return this.http.get(`${environment.Base_URL}countstudent`).toPromise();
  }
  countfaculties():Promise<any>{
    return this.http.get(`${environment.Base_URL}countfaculties`).toPromise();
  }
  countcourses():Promise<any>{
    return this.http.get(`${environment.Base_URL}countcourses`).toPromise();
  }
}
