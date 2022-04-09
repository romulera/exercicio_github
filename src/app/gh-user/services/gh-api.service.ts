//esse serviço vai fazer a aquisiçao https

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GhUser } from '../models/ghUser';
import { GhRepos } from '../models/ghRepos'



@Injectable(
  /* {providedIn: 'root' //esse root indica que voce pode usar ele em qualquer lugar } */
  )
export class GhApiService {

  //propriedade com a url base do serviço da api github
  private readonly baseUrl: string = "https://api.github.com/users"

  constructor(
    private http: HttpClient //injeçao de dependencia

  ) { }

  findUser(username: string): Observable<GhUser> { //o tipo de retorno do observable é GHuser, que é a interface que criamos
    return this.http.get<GhUser>(`${this.baseUrl}/${username}`)
    
  }

  findRepos(username: string): Observable<GhRepos[]> {  //aqui eu preciso dizer que o Observable vai receber um array de GhRepos
    //console.log(`${this.baseUrl}/${username}/repos`)
    let repos = this.http.get<GhRepos[]>(`${this.baseUrl}/${username}/repos`)
    return repos
    //this.http.get<GhRepos>(`${this.baseUrl}/${username}/repos`)
  }
}

