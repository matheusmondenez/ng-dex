import { Component, inject } from '@angular/core';
import { Input } from '@angular/core'
import { PokemonService } from '../pokemon.service'

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})

export class CardComponent {
  pokemonService = inject(PokemonService)
  photo: string = ''

  @Input({required: true}) url: string = '';
  @Input({required: true}) name: string = '';

  ngOnInit() {
    this.pokemonService.getData(this.url).subscribe({
      next: (data: any) => {
        this.photo = data.sprites.other['official-artwork'].front_default
      },
      error: (err) => {
        console.error(err)
      }
    })
  }
}
