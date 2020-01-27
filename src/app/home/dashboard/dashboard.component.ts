import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public authService: AuthService) { }
  // tslint:disable-next-line: ban-types
  userInformation: Object;
  ngOnInit() {
    this.authService.getUserData().then(data => {
      console.log('==', this.userInformation);
      this.userInformation = data;
    });
  }

}
