import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private authService :AuthService, 
    private router:Router) { } // router de typeScript

  ngOnInit() {
  }

  login(emailHtmlElement, passewordHtmlElement) {

    this.authService.login(emailHtmlElement.value,passewordHtmlElement.value).subscribe((successRes) => {
      console.log((successRes));
      this.router.navigate(["member"]); //si login est correcte alors on veut emmener l utilisateur vers member 
      // navigation entre un component vers un autre component 
      // difference avec router link qui est transfert d'une url vers un component
    }, (errorRes)=> {
      console.log((errorRes));
      emailHtmlElement.value = '';
      passewordHtmlElement.value = '';
    })

    
    }
  }


