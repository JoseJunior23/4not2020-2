import { Component, OnInit } from '@angular/core';
import { GrupoPespontoService } from '../grupo-pesponto.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-grupo-pesponto-list',
  templateUrl: './grupo-pesponto-list.component.html',
  styleUrls: ['./grupo-pesponto-list.component.scss']
})
export class GrupoPespontoListComponent implements OnInit {

  // Nome da entidade no plural
  grupo_pespontos : any = []

  // Quais colunas serão exibidas na tabela, e em qual ordem
  displayedColumns: string[] = ['nome_grupo', 'qtd_funcionarios','nome_funcionarios','producao', 'qtd_insumoProducao','valor_par','editar', 'excluir']   

  // Injeção de dependência ou inversão de controle
  constructor(
      private grupo_pespontoSrv : GrupoPespontoService,
      private snackBar : MatSnackBar
  ) { }

  async ngOnInit() {
    this.grupo_pespontos = await this.grupo_pespontoSrv.listar()
    console.log(this.grupo_pespontos)
  }

  async excluir(id: string) {
    if(confirm('Deseja realmente excluir?')) {
      try {
        await this.grupo_pespontoSrv.excluir(id)
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
