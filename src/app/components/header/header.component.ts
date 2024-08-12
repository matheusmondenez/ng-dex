import { Component } from '@angular/core'
import { ButtonComponent } from '../button/button.component'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  public label: string = 'Dark'

  public toogleTheme() {
    const dark = document.body.classList.toggle('dark')

    if (dark) {
      this.label = 'Light'
    } else {
      this.label = 'Dark'
    }
  }
}
