import { Component } from '@angular/core';

@Component({
  selector: 'app-app-header',
  standalone: true,
  imports: [],
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.css'
})
export class AppHeaderComponent {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
}
}
