import { Component, OnInit, inject } from '@angular/core'
import { Router } from '@angular/router'
import { PokemonService } from '../../services/pokemon.service'

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent implements OnInit {
  pokemonService = inject(PokemonService)
  name!: string
  data: object = {}
  photo: string = ''

  constructor(public router: Router) {
    this.name = router.url.substring(1)
  }

  ngOnInit(): void {
    this.pokemonService.getByIdOrName(this.name).subscribe({
      next: (data: any) => {
        this.data = data
        this.photo = data.sprites.other.home.front_default
      },
      error: (err) => {
        console.error(err)
      },
    })
  }
}
