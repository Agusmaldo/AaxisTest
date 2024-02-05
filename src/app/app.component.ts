import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; //
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './landing/home.component';
import { productoComponent } from './landing/producto/producto.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AgregarProductoComponent } from './components/agregar-producto/agregar-producto.component';
import { EditarProductoComponent } from './components/editar-producto/editar-producto.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,CommonModule, HomeComponent, productoComponent, ContactComponent, NavbarComponent, AgregarProductoComponent,EditarProductoComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'AaxisTestFront';
}