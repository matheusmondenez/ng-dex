import { Component, inject } from '@angular/core';
import { CardComponent } from '../card/card.component'
import { PokemonService } from '../pokemon.service'

interface PokemonList {
  count?: number
  next?: string | null
  previous?: string | null
  results?: any[]
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
