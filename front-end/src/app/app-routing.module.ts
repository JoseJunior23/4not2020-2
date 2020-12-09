import { ModeloSapatoListComponent } from './modelo-sapato/modelo-sapato-list/modelo-sapato-list.component';
import { InsumoListComponent } from './insumo/insumo-list/insumo-list.component';
import { FuncionarioListComponent } from './funcionario/funcionario-list/funcionario-list.component';
import { TurmaFormComponent } from './turma/turma-form/turma-form.component';
import { TurmaListComponent } from './turma/turma-list/turma-list.component';
import { CursoFormComponent } from './curso/curso-form/curso-form.component';
import { CursoListComponent } from './curso/curso-list/curso-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FuncionarioFormComponent } from './funcionario/funcionario-form/funcionario-form.component';
import { InsumoFormComponent } from './insumo/insumo-form/insumo-form.component';
import { ModeloSapatoFormComponent } from './modelo-sapato/modelo-sapato-form/modelo-sapato-form.component';

const routes: Routes = [
    //Nomes de rotas no Angular (path) Não Comecam com uma barra
    {path: 'curso', component: CursoListComponent},
    {path: 'curso/novo', component: CursoFormComponent},
    {path: 'curso/:id', component: CursoFormComponent},

    {path: 'turma', component: TurmaListComponent},
    {path: 'turma/novo', component: TurmaFormComponent},
    {path: 'turma/:id', component: TurmaFormComponent},

    {path: 'funcionario', component: FuncionarioListComponent},
    {path: 'funcionario/novo', component: FuncionarioFormComponent},
    {path: 'funcionario/:id', component: FuncionarioFormComponent},

    {path: 'insumo', component: InsumoListComponent},
    {path: 'insumo/novo', component: InsumoFormComponent},
    {path: 'insumo/:id', component: InsumoFormComponent},

    {path: 'modelo-sapato', component: ModeloSapatoListComponent},
    {path: 'modelo-sapato/novo', component: ModeloSapatoFormComponent},
    {path: 'modelo-sapato/:id', component: ModeloSapatoFormComponent}
    
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
