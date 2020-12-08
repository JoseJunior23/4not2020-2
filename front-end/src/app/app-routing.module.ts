import { FuncionarioListComponent } from './funcionario/funcionario-list/funcionario-list.component';
import { TurmaFormComponent } from './turma/turma-form/turma-form.component';
import { TurmaListComponent } from './turma/turma-list/turma-list.component';
import { CursoFormComponent } from './curso/curso-form/curso-form.component';
import { CursoListComponent } from './curso/curso-list/curso-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FuncionarioFormComponent } from './funcionario/funcionario-form/funcionario-form.component';

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
    {path: 'funcionario/:id', component: FuncionarioFormComponent}
    
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
