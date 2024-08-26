import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-moves',
  standalone: true,
  imports: [],
  templateUrl: './moves.component.html',
  styleUrl: './moves.component.css'
})
export class MovesComponent {
  @Input() moves!: string[]
}
