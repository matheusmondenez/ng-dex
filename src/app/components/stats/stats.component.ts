import { Component, Input } from '@angular/core'
import { Stats } from '../../../types/Stats'

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.css'
})
export class StatsComponent {
  @Input() stats!: Stats
}
