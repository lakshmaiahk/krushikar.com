import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name:String;
  username: String;
  email: String;
  password: String;
  
  constructor(private validateService: ValidateService,
              private authservice: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    }
    // Required Fields
    if(!this.validateService.validateRegister(user)){
      alert('Please fill in all fields');
      return false;
    }

    // Validate Email
    if(!this.validateService.validateEmail(user.email)){
      alert('Please use a valid email');
      return false;
    }

    //Register user
    this.authservice.registerUser(user).subscribe(data => {
      if(data.success){
        alert('You are now registered and can log in');
        this.router.navigate(['/login']);
      }else{
        alert('Something went to wrong');
        this.router.navigate(['/register']);
      }

    });

  }

}
