import { Component, OnInit } from '@angular/core';
import { ModeloSapatoService } from '../modelo-sapato.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-modelo-sapato-list',
  templateUrl: './modelo-sapato-list.component.html',
  styleUrls: ['./modelo-sapato-list.component.scss']
})
export class ModeloSapatoListComponent implements OnInit {

  // Nome da entidade no plural
  modelos_sapatos : any = []

  // Quais colunas serão exibidas na tabela, e em qual ordem
  displayedColumns: string[] = ['nomeFabrica','referencia', 'valor', 'editar', 'excluir']   

  // Injeção de dependência ou inversão de controle
  constructor(
      private modelo_sapatoSrv : ModeloSapatoService,
      private snackBar : MatSnackBar
  ) { }

  async ngOnInit() {
    this.modelos_sapatos = await this.modelo_sapatoSrv.listar()
    console.log(this.modelos_sapatos)
  }

  async excluir(id: string) {
    if(confirm('Deseja realmente excluir?')) {
      try {
        await this.modelo_sapatoSrv.excluir(id)
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
