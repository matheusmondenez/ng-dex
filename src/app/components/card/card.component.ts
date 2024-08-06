import { Component, OnInit, OnChanges, Input, Output, inject, SimpleChanges } from '@angular/core'
import { PokemonService } from '../../services/pokemon.service'

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent implements OnInit, OnChanges {
  pokemonService = inject(PokemonService)
  @Input({required: true}) url!: string
  @Input({required: true}) name!: string
  id!: string
  photo!: string
  types!: string[]

  constructor() {
    console.log('CardComponent constructor')
  }

  ngOnInit(): void {
    console.log('CardComponent ngOnInit')

    this.pokemonService.get(this.url).subscribe({
      next: (data: any) => {
        this.id = data.id
        this.photo = data.sprites.other['official-artwork'].front_default
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
