import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http:HttpClient) {
  }

 httpOptions = {
   headers: new HttpHeaders({
     'Content-Type':  'application/json'

   })
 };



  getRoom(): Observable<any>
      {
        const url ="http://localhost:3000/getRoom";
          return this.http.get<any>(url);

      }
}