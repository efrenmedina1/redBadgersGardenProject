import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  user: string;
  password: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

    loginUser(e) {
      e.preventDefault();
      console.log(e);
      var username = e.target.elements[0].value;
      var password = e.target.elements[1].value;
    console.log(username, password);
    fetch('https://efa-gardenapp-backend.herokuapp.com/api/auth/login', {
    method: 'POST',
    body: JSON.stringify({
      email: username,
      password: password
    }),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  })
  .then(response => response.json())
    .then(json => {
      this.storeSession(json.loggedInUser, json.token)
      this.router.navigate([''])
    })
  }

    storeSession({ role }, token) {
      sessionStorage.setItem('role', role)
      sessionStorage.setItem('token', token)
    }
    
  }


