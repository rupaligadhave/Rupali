import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormdatabaseComponent } from './formdatabase/formdatabase.component';
import { RouterModule, Routes } from '@angular/router';
import { FirebaseService } from './firebase.service';

const route:Routes=[{
  path:'formdatabase',component:FormdatabaseComponent}
]

@NgModule({
  declarations: [
    FormdatabaseComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route)

  ],
  providers:[FirebaseService]
})
export class ProductModule { }
