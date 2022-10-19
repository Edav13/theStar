import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { FilmComponent } from './film.component';

const routes: Routes = [
  {
    path: '',
    component: FilmComponent
  }
];

@NgModule({
  declarations: [
    FilmComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxDatatableModule
  ],
  exports: [RouterModule]
})
export class FilmModule { }
