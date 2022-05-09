import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  // a simple syntax to get user name and password reference to clean the html code and make it look better
  get userName() {
    return this.loginUser.get('userName');
  }

  get password() {
    return this.loginUser.get('password');
  }
  // to check the user is already there or not if there then send the conditional messages.
  check: boolean = false;

  constructor(private fb: FormBuilder,private router: Router) {}

  loginUser = this.fb.group({
    userName: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  userList = JSON.parse(localStorage.getItem('arr1') || '[]');

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.userList);
    for (var detail of this.userList) {
      if (
        this.loginUser.value.userName == detail.name &&
        this.loginUser.value.password == detail.password
      ) {
        this.check = true;
        alert("User is logged in successfully");
      }
    }
    alert("Username or password is incorrect ")
    this.router.navigate(['reactive']);
  }
}
