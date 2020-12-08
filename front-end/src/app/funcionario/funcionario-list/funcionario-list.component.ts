import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../funcionario.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-funcionario-list',
  templateUrl: './funcionario-list.component.html',
  styleUrls: ['./funcionario-list.component.scss']
})
export class FuncionarioListComponent implements OnInit {

  // Nome da entidade no plural
  funcionarios : any = []

  // Quais colunas serão exibidas na tabela, e em qual ordem
  displayedColumns: string[] = ['nome', 'idade', 'cpf', 'rg','telefone','endereco','estado_civil','qtd_filho','funcao', 'editar', 'excluir']   

  // Injeção de dependência ou inversão de controle
  constructor(
      private funcionarioSrv : FuncionarioService,
      private snackBar : MatSnackBar
  ) { }

  async ngOnInit() {
    this.funcionarios = await this.funcionarioSrv.listar()
    console.log(this.funcionarios)
  }

  async excluir(id: string) {
    if(confirm('Deseja realmente excluir?')) {
      try {
        await this.funcionarioSrv.excluir(id)
        // 1) Recarregar os dados da tabela
        this.ngOnInit()
        // 2) Dar feedback para o usuário com mensagem
        this.snackBar.open('Item excluído com sucesso.', 'Entendi', {
          duration: 5000 // 5 segundos
        })
      }
      catch(erro) {
        // 3) Dar feedback de erro para o usuário
        this.snackBar.open('ERRO: não foi possível excluir este item.', 'Que pena!', {
          duration: 5000 // 5 segundos
        })
        console.log(erro)
      }
    }
  }

}
