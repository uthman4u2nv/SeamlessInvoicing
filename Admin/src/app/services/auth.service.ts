import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments'; // 'src/environments/environment';
import { Observable, map } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loginurl = environment.loginurl;
  constructor(private http: HttpClient) {}

  Login(data: LoginReq): Observable<LoginResp> {
    return this.http.post<LoginResp>(this.loginurl, data, {
      responseType: 'json',
    });
  }
}

interface LoginReq {
  email: string;
  password: string;
}
interface LoginResp {
  code: string;
  isSuccess: boolean;
  message: string;
  data: LoginData;
}
interface LoginData {
  accessToken: string;
  refreshToken: string;
  userId: number;
  firstName: string;
  email: string;
  phoneNumber: string;
  status: string;
  role: string;
  privileges: number[];
}
