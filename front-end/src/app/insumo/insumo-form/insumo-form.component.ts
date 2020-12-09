import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { InsumoService } from '../insumo.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CursoService } from 'src/app/curso/curso.service';
import { ProfessorService } from 'src/app/professor/professor.service';
import { SalaAulaService } from 'src/app/sala-aula/sala-aula.service';

@Component({
  selector: 'app-insumo-form',
  templateUrl: './insumo-form.component.html',
  styleUrls: ['./insumo-form.component.scss']
})
export class InsumoFormComponent implements OnInit {

  // Variável para armazenar os dados do registro
  insumo : any = {}  // Objeto vazio, nome no SINGULAR

  title : string = 'Novo insumo'

  // Dias da semana
  agulhas : any = [
    { valor: '80' },
    { valor: '90' },
    { valor: '100' },
    { valor: '110' },
    { valor: '120' },
   
  ]

  constructor(
    private insumoSrv : InsumoService,
    private snackBar : MatSnackBar,
    private location : Location,
    private actRoute : ActivatedRoute
  ) { }

  async ngOnInit() {
    // Verifica se existe o parâmetro id na URL (rota)
    if(this.actRoute.snapshot.params['id']) {
      try {
        // 1) Acionar o back-end para buscar esse registro
        // e disponibilizá-lo para edição        
        this.insumo = await this.insumoSrv.obterUm(this.actRoute.snapshot.params['id'])
        // 2) Mudar o título da página
        this.title = 'Editando insumo'
      }
      catch(erro) {
        console.log(erro)
        this.snackBar.open('ERRO: não foi possível carregar dados para edição.',
          'Que pena!', { duration: 5000 })
      }
    }
  }
  async salvar(form: NgForm) {
    //console.log(this.insumo)
    //return
    if(form.valid) {
      try {
        // 1) Salvar os dados no back-end
        // Se o insumo já existir (caso de edição), ele já terá
        // o atributo _id
        if(this.insumo._id) {
          await this.insumoSrv.atualizar(this.insumo) // Atualização
        }
        else {
          await this.insumoSrv.novo(this.insumo)
        }
        // 2) Dar o feedback para o usuário
        this.snackBar.open('Dados salvos com sucesso.', 'Entendi',
          { duration: 5000 })
        // 3) Voltar ao componente de listagem
        this.location.back()
      }
      catch (erro) {
        console.log(erro)
        this.snackBar.open('ERRO: não foi possível salvar os dados.', 'Que pena!',
          { duration: 5000 })
      }
      
    }
  }

  voltar(form: NgForm) {
    let result = true
    // form.dirty = formulário "sujo", não salvo (via código)
    // form.touched = o conteúdo de algum campo foi alterado (via usuário)
    if(form.dirty && form.touched) {
      result = confirm('Há dados não salvos. Deseja realmente voltar?')
    }

    if(result) this.location.back()

  }

}