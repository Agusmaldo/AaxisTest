import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component';

export const routes: Routes = [
    {'path': '', component: HomeComponent},
    {'path': 'about', component: AboutComponent},
    {'path': 'contact', component: ContactComponent},
    {'path': '', component: NavbarComponent},
    {'path': 'agregarProducto', component: AgregarProductoComponent},

];
