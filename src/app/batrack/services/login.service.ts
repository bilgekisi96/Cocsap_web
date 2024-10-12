import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface ApiResponse {
  data: string;
  status: number;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

    constructor(private http:HttpClient) {}

    loginpost(requestData?:any): Observable<ApiResponse> {
      return this.http.post<ApiResponse>('https://tekelektrikcompany.com/api/auth/login', requestData);
    }

    loginget(basicAuth?:any): Observable<ApiResponse> {
      const headers = new HttpHeaders({
        'Authorization': basicAuth,
        'Content-Type': 'application/json'
      });
      return this.http.get<ApiResponse>('https://tekelektrikcompany.com/api/auth/login', { headers });
    }

}
