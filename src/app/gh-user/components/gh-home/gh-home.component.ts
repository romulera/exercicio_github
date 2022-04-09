import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog'; //precisa importar o matdialog
import { GhDialogComponent } from '../gh-dialog/gh-dialog.component';

@Component({
  selector: 'app-gh-home',
  templateUrl: './gh-home.component.html',
  styleUrls: ['./gh-home.component.css']
})
export class GhHomeComponent implements OnInit {

  usernameToFind: FormControl = new FormControl('', [Validators.required])

  constructor(
    //fazendo a obscura invejeção de dependencia
    private dialog: MatDialog  //vai fazer uma instancia do MatDialog

  ) { }

  ngOnInit(): void {
  }

  showDialog(): void {
    let ref = this.dialog.open(GhDialogComponent) //pra ref guardar esse compoentene que vai ser aberto
    console.log(this.usernameToFind.value)
    ref.componentInstance.username = this.usernameToFind.value //jogando a propriedade do formulario pra dentro do componente GhDialogComponente TREEETAAA
  }
}
