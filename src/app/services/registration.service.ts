import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments'; // 'src/environments/environment';
import { Observable, map } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  sendotpurl = environment.sendotpurl;
  verifyotpurl = environment.verifyotpurl;
  registerurl = environment.registerurl;
  constructor(private http: HttpClient) {}

  SendOTP(data: SendOTPReq): Observable<SendOTpResp> {
    return this.http.post<SendOTpResp>(this.sendotpurl, data, {
      responseType: 'json',
    });
  }
  VerifyOTP(data: VerifyOTPReq): Observable<VerifyOTPResp> {
    return this.http.post<VerifyOTPResp>(this.sendotpurl, data, {
      responseType: 'json',
    });
  }
  SubmitReg(data: SubmitRegReq): Observable<SubmitRegResp> {
    return this.http.post<SubmitRegResp>(this.registerurl, data, {
      responseType: 'json',
    });
  }
}

interface SendOTPReq {
  destination: string;
  otpType: number;
}
interface SendOTpResp {
  code: string;
  isSuccess: true;
  message: string;
  data: string;
}
interface VerifyOTPReq {
  destination: string;
  otp: string;
  otpType: number;
}
interface VerifyOTPResp {
  code: string;
  isSuccess: true;
  message: string;
  data: string;
}
interface SubmitRegReq {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  organizationName: string;
}
interface SubmitRegResp {
  code: string;
  isSuccess: boolean;
  message: string;
  data: string;
}
