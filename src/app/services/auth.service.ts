import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  public isAuthenticated(): boolean {
    const userData = sessionStorage.getItem('userData');
    if (userData && userData.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  public async getUserData() {
    const userData = await sessionStorage.getItem('userData');
    return JSON.parse(userData);
  }
  public async login(postData: { email: string; password: string; }) {
    // login actions
    console.log('postData with email & pwd:', postData);
    const loginApiResponce = {
      name: 'Kishan Upadhyay',
      uid: 1,
      token: '2323523523DFSWERWERWER'
    };
    await sessionStorage.setItem('userData', JSON.stringify(loginApiResponce));
    return true;
  }


  public signup(postData) {
    // login actions

  }

  public async logout() {
    // logout actions
    await sessionStorage.removeItem('userData');
    await sessionStorage.clear();
    return true;
  }

}
