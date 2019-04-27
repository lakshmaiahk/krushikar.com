import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: String;
  password: String;

  constructor(private authservice: AuthService,
              private rouetr: Router) { }

  ngOnInit() {
  }

  onLoginSubmit(){
    const user = {
      username: this.username,
      password: this.password
    }
      this.authservice.authenticateUser(user).subscribe(data => {
      if(data.success){
            this.authservice.storeUserData(data.token, data.user);
            alert('You are now Logged in');
            this.rouetr.navigate(['dashboard']);
            

      }else{
            alert('user not found');
            this.rouetr.navigate(['login']);
      }
    });

  }

}
