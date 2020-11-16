 
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-curso-form',
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.scss']
})
export class CursoFormComponent implements OnInit {

  // Variável para armazenar os dados do registro
  curso : any = {}  // Objeto vazio, nome no SINGULAR

  niveis : any = [
    { valor: 'Básico' },
    { valor: 'Intermediário' },
    { valor: 'Avançado' }
  ]

  title : string = 'Novo curso'

  constructor() { }

  ngOnInit(): void {
  }

  salvar(form: NgForm){
    if(form.valid){
        //1 = salvar os dados do back-end
        //2 = dar feedback ao usuario
        //3 = valotar ao componente listagem
    }
  }

  voltar(form: NgForm){

  }

}
