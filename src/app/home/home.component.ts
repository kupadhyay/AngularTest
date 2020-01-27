import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // tslint:disable-next-line: no-inferrable-types
  public productCount: number = 0;
  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit() {
    console.log('load home modue and inside home component...');
  }
  logoutAction() {
    if (this.authService.logout()) {
      this.router.navigate(['login']);
    }
  }

}
