import { NgModule } from '@angular/core'; //pro angular entender que essa classe vai ser um modulo
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.modules';
import { GhHomeComponent } from './components/gh-home/gh-home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GhDialogComponent } from './components/gh-dialog/gh-dialog.component';
import { HttpClientModule } from '@angular/common/http'; //modulo que faz requisiçao HTTP
import { GhApiService } from './services/gh-api.service';



@NgModule({
  declarations: [
    GhHomeComponent,
    GhDialogComponent //se eu na colocar no export, ele fica restrito e nao ira fucionar no app.component.html
  ], //aqui coloca componentes, diretivas e pipes
  imports: [
    //modulo com a base do angular e tudo padrao do angular ta vindo daqui, dentro de imports vao somente os modulos
    CommonModule, 
    MaterialModule, //pra importa modulos, assim os componentes vao ter acesso ao angular material
    ReactiveFormsModule, //tem que importar aqui no gh-user.module.ts para os outros componentes terem acesso a ele
    HttpClientModule, //modulo responsavel pra fazer uma requisição HTTP
  ], 
    //colocar a propriedade export pra que o app component tenha acesso a ele
  exports: [
    GhHomeComponent //agora eu posso acessar esse componente no app.component.html
  ], 
  //aqui dentro voce fala quais serviços que a aplicaçao vai utilizar
  providers: [
    GhApiService //qualquer outro componente vai poder user esse serviço
  ]

})
export class GhUserModule { }
