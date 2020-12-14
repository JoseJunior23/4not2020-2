import { ProducaoRecebidaService } from './../../producaoRecebida/producao-recebida.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GrupoPespontoService } from '../grupo-pesponto.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FuncionarioService } from 'src/app/funcionario/funcionario.service';

@Component({
  selector: 'app-grupo-pesponto-form',
  templateUrl: './grupo-pesponto-form.component.html',
  styleUrls: ['./grupo-pesponto-form.component.scss']
})
export class GrupoPespontoFormComponent implements OnInit {

  // Variável para armazenar os dados do registro
  grupo_pesponto : any = {}  // Objeto vazio, nome no SINGULAR

  title : string = 'Novo grupo de pesponto'

  nomeFuncionarios1 : any = []
  nomeFuncionarios2 : any = []
  nomeFuncionarios3 : any = []
  producao: any = []

  // Variáveis para armazenar as listagens de objetos relacionados
funcionarios : any = []
producoes : any = []




  constructor(
    private grupo_pespontoSrv : GrupoPespontoService,
    // Services das entidades relacionadas,
    private funcionarioSrv : FuncionarioService,
    private porducaoRecebidaSrv : ProducaoRecebidaService,
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
        this.grupo_pesponto = await this.grupo_pespontoSrv.obterUm(this.actRoute.snapshot.params['id'])
        // 2) Mudar o título da página
        this.title = 'Editando grupos de pesponto'
      }
      catch(erro) {
        console.log(erro)
        this.snackBar.open('ERRO: não foi possível carregar dados para edição.',
          'Que pena!', { duration: 5000 })
      }
    }
    // Carrega as listagens das entidades relacionadas
    this.carregarDados()
  }

  async carregarDados() {
    try {
      this.funcionarios = await this.funcionarioSrv.listar()
      this.producoes = await this.porducaoRecebidaSrv.listar()
    }
    catch(erro) {
      console.log(erro)
      this.snackBar.open(`ERRO: não foi possível carregar todos os dados 
        necessários para a página.`, 'Que pena', { duration: 5000 })
    }
  }

  async salvar(form: NgForm) {
    //console.log(this.grupo_pesponto)
    //return
    if(form.valid) {
      try {
        // 1) Salvar os dados no back-end
        // Se o grupo_pesponto já existir (caso de edição), ele já terá
        // o atributo _id
        if(this.grupo_pesponto._id) {
          await this.grupo_pespontoSrv.atualizar(this.grupo_pesponto) // Atualização
        }
        else {
          await this.grupo_pespontoSrv.novo(this.grupo_pesponto)
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