import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments'; // 'src/environments/environment';
import { Observable, map } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  sendotpurl = environment.sendotpurl;
  constructor(private http: HttpClient) {}

  SendOTP(data: SendOTPReq): Observable<SendOTpResp> {
    return this.http.post<SendOTpResp>(this.sendotpurl, data, {
      responseType: 'json',
    });
  }
}

interface SendOTPReq {
  destination: string;
  otpType: number;
}
interface SendOTpResp {
  code: 'string';
  isSuccess: true;
  message: 'string';
  data: 'string';
}
