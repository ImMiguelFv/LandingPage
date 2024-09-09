import { Component } from '@angular/core';
import { FormularioComponent } from '../formulario/formulario.component'
import { HeroComponent } from '../hero/hero.component';
@Component({
  selector: 'app-body',
  standalone: true,
  imports: [FormularioComponent, HeroComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}