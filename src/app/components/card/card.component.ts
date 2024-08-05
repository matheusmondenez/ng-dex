import { Component, inject } from '@angular/core';
import { Input } from '@angular/core'
import { PokemonService } from '../../services/pokemon.service'

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  pokemonService = inject(PokemonService)
  id!: string
  photo!: string
  types!: string[]

  @Input({required: true}) url: string = '';
  @Input({required: true}) name: string = '';

  ngOnInit() {
    this.pokemonService.getData(this.url).subscribe({
      next: (data: any) => {
        this.id = data.id
        this.photo = data.sprites.other['official-artwork'].front_default
      },
      error: (err) => {
        console.error(err)
      }
    })
  }
}
