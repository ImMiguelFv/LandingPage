import { Component } from '@angular/core';
import { FormularioComponent } from '../formulario/formulario.component'
import { HeroComponent } from '../hero/hero.component';
import { ProductosComponent } from '../productos/productos.component';
import { TestimoniosComponent } from '../testimonios/testimonios.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [FormularioComponent, HeroComponent, ProductosComponent, TestimoniosComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}