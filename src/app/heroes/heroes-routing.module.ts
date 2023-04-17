import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layoutPage/layoutPage.component';
import { HeroPageComponent } from './pages/heroPage/heroPage.component';
import { ListPageComponent } from './pages/listPage/listPage.component';
import { NewHeroPageComponent } from './pages/newHeroPage/newHeroPage.component';
import { SearchPageComponent } from './pages/searchPage/searchPage.component';
import { Error404PageComponent } from '../shared/error404-page/error404-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {
        path: 'hero/:id',
        component: HeroPageComponent,
      },
      {
        path: 'list-heroes',
        component: ListPageComponent,
      },
      {
        path: 'new-hero',
        component: NewHeroPageComponent,
      },
      {
        path: 'edit-hero/:id',
        component: NewHeroPageComponent,
      },
      {
        path: 'search-hero',
        component: SearchPageComponent,
      },
      {
        path: '**',
        redirectTo: 'list-heroes',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroesRoutingModule {}
