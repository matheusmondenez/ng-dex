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
    next: 1,
    ended: false,
  }

  constructor() {
    // console.log('ListComponent constructor')
  }

  ngOnInit(): void {
    // console.log('ListComponent ngOnInit')
    // console.log('LIST:', this.pokemonList)

    this.addOnList(this.pagination.offset)
    this.pagination.next += 20
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('ListComponent ngOnChanges')
  }

  loadMore() {
    if (!this.pagination.ended){
      if (this.pagination.next + 20 <= 151) {
        this.pagination.offset += 20
        this.addOnList(this.pagination.offset)
        this.pagination.next += 20
      } else {
        const remaining = (this.pagination.next + 20) - 150

        this.pagination.offset += 20
        this.addOnList(this.pagination.offset, remaining)
        this.pagination.ended = true
      }
    }
  }

  addOnList(offset: number, limit: number = this.pagination.limit) {
    this.pokemonService.getAll({offset, limit}).subscribe({
      next: (data: any) => {
        this.pokemonList.push(...data.results)
      },
      error: (err) => {
        console.error(err)
      }
    })
  }
}
