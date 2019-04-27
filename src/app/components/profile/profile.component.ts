import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from  '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:object;

  constructor(private authservice: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.authservice.getProfile().subscribe(profile => { this.user = profile.user; },
    err =>{ alert(err); return false;}
    );

  }

}
