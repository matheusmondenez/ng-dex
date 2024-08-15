import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component'
import { PokemonComponent } from './pages/pokemon/pokemon.component'

export const routes: Routes = [
  { path: '', title: 'NgDex | Home', component: HomeComponent },
  { path: ':pokemon', title: 'NgDex', component: PokemonComponent },
];
