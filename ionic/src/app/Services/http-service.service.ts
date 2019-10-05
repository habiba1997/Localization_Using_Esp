import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  
  constructor(private http:HttpClient) {
   }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'

    })
  };


//   getData()
// {
//   const Url = "http://localhost:3000/company-users-names";
//   return this.http.get<any>(Url,this.httpOptions);
// }

  getRoom(): Observable<any>
  {
    const url ="http://localhost:3000/getRoom";
     return this.http.get<any>(url);

  }

}

