import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthenticationService } from '../services/'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model :any;
  loading = false;
  returnUrl : string;


  constructor(
    private route: ActivatedRoute,
    private router : Router,
    private authenticationService : AuthenticationService,
    private alertService : AlertService
  ) { }

  ngOnInit() {
    //Resert status login
    this.authenticationService.logout();
    //Get return url from  route  parameters of default to '/'
    this.returnUrl  = this.route.snapshot.queryParams['returnUrl'] || '/';
  }


  login(){
    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password)
    .subscribe(data=>{
      this.router.navigate([this.returnUrl],
      error=>{
        this.alertService.error(error);
        this.loading = false;
      })
    })

  }

}
