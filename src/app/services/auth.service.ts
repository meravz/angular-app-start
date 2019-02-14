import { Injectable } from '@angular/core';
import { of, throwError, Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

private _isLogged:BehaviorSubject<boolean>; // dif entre observable et behavior
//observable : utilise quand je veux une info de l'exterieur (api
// behavior: une donnee au sein de mon application)

  constructor() {
    this._isLogged = new BehaviorSubject<boolean>(false); //by default 
   }

  login(email: string, passeword: string): Observable<string> {
    if (email === 'a@a.core' && passeword === 'aaa') {
      return of('ok') // pas de serveur a la place de subscribe of c un observable 
      .pipe( // fonction pour permettre d integrer d autres fonctions 
        map(res => { // il faut import map ca ne se fait pas automatiquement
          this.setToken(res); //c le token qu'il faut enregistrer dans le local storage via un service que si l identification c fait beatslaha
          // pour permettre le zihouye de l'utilisateur lors de sa connexion (comme les sessions en php)
          this._isLogged.next(true);
          return res;
      }));
    } else {
      return throwError('user or passeword incorrect');
    }
  }

  private setToken(t:string){
    window.localStorage.setItem(environment.tokenKey , t); // toutes les choses globales de l apllication il faut mettre dans environnements 
  }

  private getToken(){
   return window.localStorage.getItem(environment.tokenKey);
  }

  isLogged() :Observable<boolean>{ // doit etre un observable car c le seul moyen d etre meadken (via subscribe) tous les autres services si 
                                   // l'utilisateur estt connecte ou non
                                   // tous les services qui sont connecte a lui l'observable les previent d'un changement
    //return of(this.getToken() !=null) ; // si il est identifier alors il y a eu setToken (identification boutsaa beatslaha alors on a fait un setToken) 
                                    //donc on peut etre mafile la fonction get
    return this._isLogged
  }

  private deleteToken(){
    window.localStorage.removeItem(environment.tokenKey); // toutes les choses globales de l apllication il faut mettre dans environnements 
  }


  logout(){
    this._isLogged.next(false);
 this.deleteToken();
  }
}
