import { Component, OnInit } from '@angular/core';
import { InsumoService } from '../insumo.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-insumo-list',
  templateUrl: './insumo-list.component.html',
  styleUrls: ['./insumo-list.component.scss']
})
export class InsumoListComponent implements OnInit {

  // Nome da entidade no plural
  insumos : any = []

  // Quais colunas serão exibidas na tabela, e em qual ordem
  displayedColumns: string[] = ['linha', 'cola', 'agulha', 'editar', 'excluir']   

  // Injeção de dependência ou inversão de controle
  constructor(
      private insumoSrv : InsumoService,
      private snackBar : MatSnackBar
  ) { }

  async ngOnInit() {
    this.insumos = await this.insumoSrv.listar()
    console.log(this.insumos)
  }

  async excluir(id: string) {
    if(confirm('Deseja realmente excluir?')) {
      try {
        await this.insumoSrv.excluir(id)
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
