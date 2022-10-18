import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PghomeComponent } from './pghome/pghome.component';
import { PgstaffComponent } from './pgstaff/pgstaff.component';
import { PgstudentComponent } from './pgstudent/pgstudent.component';
import { PgaddimisionComponent } from './pgaddimision/pgaddimision.component';
import { RouterModule, Routes } from '@angular/router';
import { ButtonModule } from 'primeng/button';

const route:Routes=[
  {path:'home',component:PghomeComponent},
  {path:'pgstaff',component:PgstaffComponent},
  {path:'pgstud',component:PgstudentComponent},
  {path:'pgaddimision',component:PgaddimisionComponent},
]

@NgModule({
  declarations: [
    PghomeComponent,
    PgstaffComponent,
    PgstudentComponent,
    PgaddimisionComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    [RouterModule.forChild(route)]
  ],
})
export class PgModule { }
