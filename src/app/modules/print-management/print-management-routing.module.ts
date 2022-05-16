import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { PrintLayoutComponent } from './print-layout/print-layout.component'

const routes: Routes = [
  // {
  //   path: 'SomeComponent/:id',
  //   component: SomeComponent
  // }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrintManagementRoutingModule { }
