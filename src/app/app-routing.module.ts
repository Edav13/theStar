import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'people',
    loadChildren: () => import('./pages/people/people.module').then(m => m.PeopleModule)
  }, {
    path: 'individual/:id',
    loadChildren: () => import('./pages/individual/individual.module').then(m => m.IndividualModule)
  },
  {
    path: 'film/:id/:film',
    loadChildren: () => import('./pages/film/film.module').then(m => m.FilmModule)
  },
  {
    path: '',
    redirectTo: 'people',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
