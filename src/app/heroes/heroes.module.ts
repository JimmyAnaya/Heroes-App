import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroPageComponent } from './pages/heroPage/heroPage.component';
import { LayoutPageComponent } from './pages/layoutPage/layoutPage.component';
import { ListPageComponent } from './pages/listPage/listPage.component';
import { NewHeroPageComponent } from './pages/newHeroPage/newHeroPage.component';
import { SearchPageComponent } from './pages/searchPage/searchPage.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    HeroPageComponent,
    LayoutPageComponent,
    ListPageComponent,
    NewHeroPageComponent,
    SearchPageComponent,
  ],
  imports: [CommonModule, HeroesRoutingModule, MaterialModule],
})
export class HeroesModule {}
