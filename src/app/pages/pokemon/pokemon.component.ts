import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {
  constructor(public router: Router) {
    // console.log(router)
  }
}
