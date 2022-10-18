import { NgComponentOutlet } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiComponent } from './api/api.component';
import { AuthGuard } from './auth.guard';
import { ContactusComponent } from './contactus/contactus.component';
import { FirstComponent } from './data communication/first/first.component';
import { ParentComponent } from './data communication/parent/parent.component';
import { SecondComponent } from './data communication/second/second.component';
import { ErrorComponent } from './error/error.component';
import { FormdatabaseComponent } from './firebase/product/formdatabase/formdatabase.component';
import { HomeComponent } from './home/home.component';
import { NgtempcontainerComponent } from './ngtempcontainer/ngtempcontainer.component';
import { SampletextComponent } from './sampletext/sampletext.component';
import { StaffComponent } from './staff/staff.component';
import { StudentComponent } from './student/student.component';
import { UesrdetailsComponent } from './uesrdetails/uesrdetails.component';

const routes: Routes = [
  {path:'home',component:HomeComponent,resolve:[AuthGuard]},
  {path:'staff/:id/:name',component:StaffComponent},
 // { path:'staff',component:StaffComponent},
  {path:'stud', component:StudentComponent},
  {path:'contact',component:ContactusComponent,canActivate:[AuthGuard]},
  {path:'userdetails/:id/:name',component:UesrdetailsComponent},
  {path:'parent',component:ParentComponent},
  {path:'first',component:FirstComponent},
  {path:'second',component:SecondComponent},
  {path:'ngtempcontainer',component:NgtempcontainerComponent},
  {path:'api',component:ApiComponent},
  {path:'sampletext',component:SampletextComponent},
  {path:'formdatabase',component:FormdatabaseComponent},
  {
    path:'ug',loadChildren:()=>import('./ug/ug.module').then(mod=>mod.UgModule)
  },
  {
    path:'pg',loadChildren:()=>import('./pg/pg.module').then(mod=>mod.PgModule)
  },
  {path:'**',component:ErrorComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
