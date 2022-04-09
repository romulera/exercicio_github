import { Component, OnInit } from '@angular/core';
import { GhRepos } from '../../models/ghRepos';
import { GhUser } from '../../models/ghUser';
import { GhApiService } from '../../services/gh-api.service';

@Component({
  selector: 'app-gh-dialog',
  templateUrl: './gh-dialog.component.html',
  styleUrls: ['./gh-dialog.component.css']
})
export class GhDialogComponent implements OnInit {

  username: string = ''
  user: GhUser | null = null
  repos: GhRepos[] = [] // | null = null //Precisa dizer que o repos vai receber um array de GhRepos 
  ranking: any[] = [] //array para receber o raking dos repos com mais estrelas

 

  constructor(
    private ghService: GhApiService //injecao de dependencia 
  ) { }

  ngOnInit(): void { //a funçao ghService retornar um observalbe, por isso ja pode ser feita a inscriçao aqui mesmo, e passa as funçoes; sucesso; erro; complete.
    this.ghService.findUser(this.username).subscribe(
      (gUser) => {
        this.user = gUser //valor que retornar da API vai ser guardada nessa variavel user
        //console.log(this.user.login+"teste") //ele tem a tipagem da interface
      }
    )

    this.ghService.findRepos(this.username).subscribe(
      (gRepos) => {
        this.repos = gRepos || [] //Garantir que se estiver null ele receberá um array vazio
        //console.log(this.repos[0].stargazers_count) 
        // console.log(this.repos.length)
        
        this.repos.forEach(repositorios => {
            //console.log(repositorios.stargazers_count)
            //console.log(repositorios.name)
            this.ranking.push([repositorios.stargazers_count, repositorios.name])
                        this.ranking.sort()
            this.ranking.reverse()
            //console.log(this.ranking)
            
          })

        
        
    
        
      } 

    )



   
  }
}
