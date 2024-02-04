import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; //
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,CommonModule, HomeComponent, AboutComponent, ContactComponent, NavbarComponent, AgregarProductoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'AaxisTestFront';
}