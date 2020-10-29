import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { promise } from 'protractor';
import {map} from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  
  constructor(private http:HttpClient) { }
  addstudents(model : any):Observable<any>{
    return this.http.post(`${environment.Base_URL}addstudents`,model);
  }
  liststudents():Promise<any>{
    return this.http.get(`${environment.Base_URL}liststudents`).toPromise();
  }
  getstudentsById(id: any):Promise<any>{
    return this.http.get(`${environment.Base_URL}getstudentsById/${id}`).toPromise();
  }
  updatestudents(model: any): Observable<any> {
    return this.http.put(`${environment.Base_URL}updatestudents`,model);
  }
  deletestudents(sid: number): Observable<any> {
    return this.http.delete(`${environment.Base_URL}deletestudents/${sid}`);
  }
  postFile(fileToUpload:File): Observable<any> {
    const endpoint = environment.Base_URL + `uploadstudents`;
    const formData: FormData = new FormData();
    formData.append('image', fileToUpload,fileToUpload.name);
    return this.http.post(endpoint,formData)
    .pipe(map(i => {return i}));
  }
  addbatchstudent(model : any):Observable<any>{
    return this.http.post(`${environment.Base_URL}addbatchstudent`,model);
  }
  listbatchgstudent():Promise<any>{
    return this.http.get(`${environment.Base_URL}listbatchgstudent`).toPromise();
  }
  listbatchcstudent():Promise<any>{
    return this.http.get(`${environment.Base_URL}listbatchcstudent`).toPromise();
  }
  listbatchotostudent():Promise<any>{
    return this.http.get(`${environment.Base_URL}listbatchotostudent`).toPromise();
  }
  getbatchstudentbyid(id: any):Promise<any>{
    return this.http.get(`${environment.Base_URL}getbatchstudentbyid/${id}`).toPromise();
  }
  updatebatchstudent(model: any): Observable<any> {
    return this.http.put(`${environment.Base_URL}updatebatchstudent`,model);
  }
  deletebatchstudent(bsid: number): Observable<any> {
    return this.http.delete(`${environment.Base_URL}deletebatchstudent/${bsid}`);
  }

getgenbatch():Promise<any> {
    return this.http.get(`${environment.Base_URL}getgenbatch`).toPromise();
  }
getgenstudent():Promise<any> {
    return this.http.get(`${environment.Base_URL}getgenstudent`).toPromise();
  }

getclubbatch():Promise<any> {
  return this.http.get(`${environment.Base_URL}getclubbatch`).toPromise();
}
getclubstudent():Promise<any> {
  return this.http.get(`${environment.Base_URL}getclubstudent`).toPromise();
}

getonetoonebatch():Promise<any> {
  return this.http.get(`${environment.Base_URL}getonetoonebatch`).toPromise();
}
getonetoonestudent():Promise<any> {
  return this.http.get(`${environment.Base_URL}getonetoonestudent`).toPromise();
}
}
