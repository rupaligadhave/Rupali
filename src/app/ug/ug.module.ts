import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UgstaffComponent } from './ugstaff/ugstaff.component';
import { UgstudentComponent } from './ugstudent/ugstudent.component';
import { UghomeComponent } from './ughome/ughome.component';
import { UgcourseComponent } from './ugcourse/ugcourse.component';
import { RouterModule, Routes } from '@angular/router';
import{ButtonModule} from 'primeng/button';
import {ConfirmationService} from 'primeng/api';
import {ConfirmDialogModule} from 'primeng/confirmdialog';

const route:Routes=[
  {path:'home',component:UghomeComponent},
  {path:'ugstaff',component:UgstaffComponent},
  {path:'ugstud',component:UgstudentComponent},
  {path:'ugcourse',component:UgcourseComponent},
]
@NgModule({
  declarations: [
    UgstaffComponent,
    UgstudentComponent,
    UghomeComponent,
    UgcourseComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    ConfirmDialogModule,
    
  [RouterModule.forChild(route)]
  ],
  providers:[
     ConfirmationService ,
    ]
})
export class UgModule { }
