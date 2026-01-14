import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { LoadingService } from '../../../services/loading.service';
import { AuthService } from '../../../services/auth.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SweetAlertService } from '../../../core/services/sweetalert.service';
import Swal, { SweetAlertIcon, SweetAlertOptions } from 'sweetalert2';
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  FormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-auth-signin',
  standalone: true,
  imports: [
    NgbCarouselModule,
    CommonModule,
    RouterLink,
    RouterModule,
    NgbCarouselModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './auth-signin.component.html',
  styleUrl: './auth-signin.component.scss',
})
export class AuthSigninComponent {
  showPw = true;
  authForm: any;
  submitting = false;
  error = false;
  errorMessage = '';
  testimonials = [
    {
      title: '“I feel confident imposing on myself”',
      content:
        'Vestibulum auctor orci in risus iaculis consequat suscipit felis rutrum aliquet iaculis augue sed tempus In elementum ullamcorper lectus vitae pretium Nullam ultricies diam eu ultrices sagittis.',
    },
    {
      title: '“Our task must be to free widening circle”',
      content:
        'Curabitur eget nulla eget augue dignissim condintum Nunc imperdiet ligula porttitor commodo elementum Vivamus justo risus fringilla suscipit faucibus orci luctus ultrices posuere cubilia curae ultricies cursus.',
    },
    {
      title: "“I've learned that people forget what you”",
      content:
        'Pellentesque lacinia scelerisque arcu in aliquam augue molestie rutrum Fusce dignissim dolor id auctor accumsan vehicula dolor vivamus feugiat odio erat sed  quis Donec nec scelerisque magna',
    },
  ];
  constructor(
    private loading: LoadingService,
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {}
  ngOnInit() {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/
          ),
        ],
      ],
    });
  }
  Login() {
    alert('Yo');
    if (this.authForm.invalid) {
      this.authForm.markAllAsTouched();
      return;
    }
    //this.submitting = true;
    this.loading.show();
    let data = {
      email: this.authForm.value.email,
      password: this.authForm.value.password,
    };
    alert('Data' + JSON.stringify(data));
    this.auth.Login(data).subscribe((d) => {
      alert('Data' + JSON.stringify(d));
      if (d.isSuccess && d.code == '00') {
        localStorage.setItem('token', d.data.accessToken);
        localStorage.setItem('userId', d.data.userId.toString());
        localStorage.setItem('firstName', d.data.firstName);
        localStorage.setItem('email', d.data.email);
        localStorage.setItem('phoneNumber', d.data.phoneNumber);
        localStorage.setItem('status', d.data.status);
        localStorage.setItem('role', d.data.role);

        //redirect to pages
        this.router.navigate(['/pages']);
      } else {
        this.error = true;
        this.errorMessage = d.message;
      }
    });
    this.loading.hide();
  }

  get g() {
    return this.authForm.controls;
  }
}
