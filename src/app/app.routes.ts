import { Routes } from '@angular/router';
import { HomeComponent } from './landing/home.component';
import { AboutComponent } from './landing/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AgregarProductoComponent } from './components/agregar-producto/agregar-producto.component';
import { EditarProductoComponent } from './components/editar-producto/editar-producto.component';

export const routes: Routes = [
    {'path': '', component: HomeComponent},
    {'path': 'about', component: AboutComponent},
    {'path': 'contact', component: ContactComponent},
    {'path': '', component: NavbarComponent},
    {'path': 'agregarProducto', component: AgregarProductoComponent},
    {'path': 'editarProducto', component: EditarProductoComponent},


];
