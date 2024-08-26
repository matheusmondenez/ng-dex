import { Component, OnInit, inject } from '@angular/core'
import { Router } from '@angular/router'
import { PokemonService } from '../../services/pokemon.service'
import { StatsComponent } from '../../components/stats/stats.component'
import { MovesComponent } from '../../components/moves/moves.component'
import { Stats } from '../../../types/Stats'

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [StatsComponent, MovesComponent],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent implements OnInit {
  pokemonService = inject(PokemonService)
  name!: string
  data: object = {}
  photo: string = ''
  stats?: Stats | any
  moves?: string[] | any

  constructor(public router: Router) {
    this.name = router.url.substring(1)
  }

  ngOnInit(): void {
    this.pokemonService.getByIdOrName(this.name).subscribe({
      next: (data: any) => {
        this.data = data
        this.photo = data.sprites.other.home.front_default
        this.stats = data.stats.map((stat: any) => ({stat: stat.stat.name, value: stat.base_stat}))
        this.moves = data.moves.map((move: any) => move.move.name)
      },
      error: (err) => {
        console.error(err)
      },
    })
  }
}
