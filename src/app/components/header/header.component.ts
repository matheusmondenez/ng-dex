import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { ButtonComponent } from '../button/button.component'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, ButtonComponent, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  public label: string = 'Dark'
  public name: string = ''

  public setSearch(event: any) {
    event.preventDefault()
    this.name = event.target.value

    alert(`Set Search: ${event.target.value}`)
  }

  public getSearch() {
    alert(`Get Search: ${this.name}`)
  }

  public filter() {
    alert('Filter!')
  }

  public toogleTheme() {
    const dark = document.body.classList.toggle('dark')

    if (dark) {
      this.label = 'Light'
    } else {
      this.label = 'Dark'
    }
  }

  public alert(text: string) {
    alert(text)
  }
}
