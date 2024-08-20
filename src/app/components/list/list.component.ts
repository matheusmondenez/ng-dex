import { Component, Input, OnInit, OnChanges, SimpleChanges, inject } from '@angular/core'
import { CardComponent } from '../card/card.component'
import { ButtonComponent } from '../button/button.component'
import { PokemonService } from '../../services/pokemon.service'
import { Pagination } from '../../../types/Pagination'
import { List } from '../../../types/List'
import { SkeletonComponent } from "../skeleton/skeleton.component";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent, ButtonComponent, SkeletonComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent implements OnInit, OnChanges {
  pokemonService = inject(PokemonService)
  pokemonList: List = []
  pagination: Pagination = {
    offset: 0,
    limit: 20,
    next: 21,
    ended: false,
  }

  constructor() {
    console.log('ListComponent constructor')
  }

  ngOnInit(): void {
    console.log('ListComponent ngOnInit')
    console.log('LIST:', this.pokemonList)

    this.addOnList(this.pagination.offset)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ListComponent ngOnChanges')
  }

  // TODO: Corrigir o último passo da paginação
  loadMore() {
    alert(`Ended: ${this.pagination.ended}`)
    alert(`Offset: ${this.pagination.offset}`)
    alert(`Next: ${this.pagination.next}`)

    if (!this.pagination.ended){
      if (this.pagination.next + 20 <= 151) {
        this.pagination.offset += 20
        this.pagination.next += 20
        this.addOnList(this.pagination.offset)
      } else {
        const remaining = (this.pagination.next + 20) - 151

        alert(`Última: ${remaining}`)

        this.addOnList(remaining)
        this.pagination.ended = true
      }
    }
  }

  addOnList(offset: number) {
    this.pokemonService.getAll({offset, limit: this.pagination.limit}).subscribe({
      next: (data: any) => {
        this.pokemonList.push(...data.results)
      },
      error: (err) => {
        console.error(err)
      }
    })
  }
}
