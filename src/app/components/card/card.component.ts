import { Component, OnInit, OnChanges, Input, Output, SimpleChanges, inject } from '@angular/core'
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
  types: string[] = []

  constructor() {
    console.log('CardComponent constructor')
  }

  ngOnInit(): void {
    console.log('CardComponent ngOnInit')

    this.pokemonService.get(this.url).subscribe({
      next: (data: any) => {
        this.id = data.id.toString().padStart(3, '0')
        this.photo = data.sprites.other.home.front_default
        this.types.push(...data.types.map((type: any) => type.type.name.toUpperCase()))
      },
      error: (err) => {
        console.error(err)
      }
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('CardComponent ngOnChanges')
  }
}
