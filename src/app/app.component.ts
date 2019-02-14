import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularApp';
isLogged:boolean;
  constructor(private authService :AuthService){

  }

  ngOnInit() :void {
    this.authService.isLogged().subscribe(
      res =>{
        this.isLogged =res;
      }
      
      )
  }


  logout(){ //pas besoin de observable car cette fonction n'est pas la pour nous dire si il est connecte ou pas elle deconnecte
  //un observabe est la pour nous donner une info
this.authService.logout();
  }
}
