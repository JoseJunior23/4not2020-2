import { Component, OnInit } from '@angular/core';
import { ProducaoRecebidaService } from '../producao-recebida.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-producao-recebida-list',
  templateUrl: './producao-recebida-list.component.html',
  styleUrls: ['./producao-recebida-list.component.scss']
})
export class ProducaoRecebidaListComponent implements OnInit {

  // Nome da entidade no plural
  producoes_recebidas : any = []

  // Quais colunas serão exibidas na tabela, e em qual ordem
  displayedColumns: string[] = ['qtd_pares', 'plano', 'fabrica', 'dia_recebimento', 'editar', 'excluir']   

  // Injeção de dependência ou inversão de controle
  constructor(
      private producao_recebidaSrv : ProducaoRecebidaService,
      private snackBar : MatSnackBar
  ) { }

  async ngOnInit() {
    this.producoes_recebidas = await this.producao_recebidaSrv.listar()
    console.log(this.producoes_recebidas)
  }

  async excluir(id: string) {
    if(confirm('Deseja realmente excluir?')) {
      try {
        await this.producao_recebidaSrv.excluir(id)
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
