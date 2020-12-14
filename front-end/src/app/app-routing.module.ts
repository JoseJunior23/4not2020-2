import { GrupoPespontoFormComponent } from './grupoPesponto/grupo-pesponto-form/grupo-pesponto-form.component';
import { GrupoPespontoListComponent } from './grupoPesponto/grupo-pesponto-list/grupo-pesponto-list.component';
import { ProducaoRecebidaListComponent } from './producaoRecebida/producao-recebida-list/producao-recebida-list.component';
import { ProducaoRecebidaFormComponent } from './producaoRecebida/producao-recebida-form/producao-recebida-form.component';
import { ModeloSapatoListComponent } from './modeloSapato/modelo-sapato-list/modelo-sapato-list.component';
import { InsumoListComponent } from './insumo/insumo-list/insumo-list.component';
import { FuncionarioListComponent } from './funcionario/funcionario-list/funcionario-list.component';
import { TurmaFormComponent } from './turma/turma-form/turma-form.component';
import { TurmaListComponent } from './turma/turma-list/turma-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FuncionarioFormComponent } from './funcionario/funcionario-form/funcionario-form.component';
import { InsumoFormComponent } from './insumo/insumo-form/insumo-form.component';
import { ModeloSapatoFormComponent } from './modeloSapato/modelo-sapato-form/modelo-sapato-form.component';

const routes: Routes = [
    //Nomes de rotas no Angular (path) Não Comecam com uma barra
    
    {path: 'turma', component: TurmaListComponent},
    {path: 'turma/novo', component: TurmaFormComponent},
    {path: 'turma/:id', component: TurmaFormComponent},

    {path: 'funcionario', component: FuncionarioListComponent},
    {path: 'funcionario/novo', component: FuncionarioFormComponent},
    {path: 'funcionario/:id', component: FuncionarioFormComponent},

    {path: 'insumo', component: InsumoListComponent},
    {path: 'insumo/novo', component: InsumoFormComponent},
    {path: 'insumo/:id', component: InsumoFormComponent},

    {path: 'modelo_sapato', component: ModeloSapatoListComponent},
    {path: 'modelo_sapato/novo', component: ModeloSapatoFormComponent},
    {path: 'modelo_sapato/:id', component: ModeloSapatoFormComponent},

    {path: 'producao_recebida', component: ProducaoRecebidaListComponent},
    {path: 'producao_recebida/novo', component: ProducaoRecebidaFormComponent},
    {path: 'producao_recebida/:id', component: ProducaoRecebidaFormComponent},

    {path: 'grupo_pesponto', component: GrupoPespontoListComponent},
    {path: 'grupo_pesponto/novo', component: GrupoPespontoFormComponent},
    {path: 'grupo_pesponto/:id', component: GrupoPespontoFormComponent}  
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
