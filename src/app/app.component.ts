import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; //
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './landing/home.component';
import { AboutComponent } from './landing/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AgregarProductoComponent } from './components/agregar-producto/agregar-producto.component';
import { EditarProductoComponent } from './components/editar-producto/editar-producto.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,CommonModule, HomeComponent, AboutComponent, ContactComponent, NavbarComponent, AgregarProductoComponent,EditarProductoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'AaxisTestFront';
}