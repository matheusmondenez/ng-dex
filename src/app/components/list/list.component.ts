import { Component, OnInit, OnChanges, SimpleChanges, inject } from '@angular/core';
import { CardComponent } from '../card/card.component'
import { PokemonService } from '../../services/pokemon.service'
import { Pagination } from '../../../types/Pagination'
import { List } from '../../../types/List'

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent implements OnInit, OnChanges {
  pokemonService = inject(PokemonService)
  pokemonList: List = []
  pagination: Pagination = {
    offset: 0,
    limit: 20,
  }

  constructor() {
    console.log('ListComponent constructor')
  }

  ngOnInit(): void {
    console.log('ListComponent ngOnInit')
    console.log('LIST:', this.pokemonList)

    this.pokemonService.getAll(this.pagination).subscribe({
      next: (data: any) => {
        this.pokemonList.push(...data.results)
        this.pagination.offset = 20
        this.pagination.limit = 20
      },
      error: (err) => {
        console.error(err)
      }
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ListComponent ngOnChanges')
  }
}
