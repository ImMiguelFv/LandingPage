import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { AppHeaderComponent } from './app-header/app-header.component';
import { BodyComponent } from './body/body.component';
import {JsonPipe} from '@angular/common'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, AppHeaderComponent, BodyComponent, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  datos = {
    name : '',
    email : ''
  }
}
