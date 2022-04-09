import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



loren: string = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure maiores natus reprehenderit voluptatum adipisci ex."
 
//criando um metodo
salvar(evento: any): void {
  alert("voce emitiu o conteudo")
  alert(`valor de z é ${evento.z}`)
  alert(`valor de x é ${evento.x}`)
  alert(`Esse @Output é a ${evento.y} da besta`)
  console.log(evento)
}

eventoDificil(): void {
  alert("evento dificil")
}

}
