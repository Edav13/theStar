import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IndividualComponent } from './individual.component';

const routes: Routes = [
  {
    path: '',
    component: IndividualComponent
  }
];

@NgModule({
  declarations: [
    IndividualComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class IndividualModule { }
