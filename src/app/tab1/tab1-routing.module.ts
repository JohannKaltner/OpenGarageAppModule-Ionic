import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpenWorkshopPage } from './pages/open-workshop/open-workshop.page';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,

  },
  {
    path: 'details/:id',
    // loadChildren: () => import('./pages/open-workshop/open-workshop.module').then(m => m.OpenWorkshopModule)
    // loadChildren: './pages/open-workshop/open-workshop.module#OpenWorkshopModule'
    component: OpenWorkshopPage
  },
  // {
  //   path:'details/:myid',
  //   component:OpenWorkshopPage
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule { }
