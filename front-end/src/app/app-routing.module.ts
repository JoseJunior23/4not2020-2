import { CursoListComponent } from './curso/curso-list/curso-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    //Nomes de rotas no Angular (path) Não Comecam com uma barra
    {path: 'curso', component: CursoListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
