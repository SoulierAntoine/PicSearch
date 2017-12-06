import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormPicComponent } from './components/form-pic/form-pic.component';
import { DetailPicComponent } from './components/detail-pic/detail-pic.component';


const routes: Routes = [
  { path: '', component: FormPicComponent, pathMatch: 'full' },
  { path: 'detail/:id', component: DetailPicComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
