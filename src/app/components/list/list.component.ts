import { Component, inject } from '@angular/core';
import { CardComponent } from '../card/card.component'
import { PokemonService } from '../../services/pokemon.service'

interface PokemonList {
  count?: number
  next?: string | null
  previous?: string | null
  results?: any[]
}

type Pagination = {
  offset: number
  limit: number
}

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent {
  pokemonService = inject(PokemonService)
  pokemonList: PokemonList = {}
  pagination: Pagination = {
    offset: 0,
    limit: 20,
  }

  constructor() {
    this.pokemonService.getAll().subscribe({
      next: (data: PokemonList) => {
        this.pokemonList = data
      },
      error: (err) => {
        console.error(err)
      }
    })
  }
}
