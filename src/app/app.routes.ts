import { Routes } from '@angular/router';
import { HomeComponent } from './landing/home.component';
import { productoComponent } from './landing/producto/producto.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AgregarProductoComponent } from './components/agregar-producto/agregar-producto.component';
import { EditarProductoComponent } from './components/editar-producto/editar-producto.component';
import { FooterComponent } from './components/footer/footer.component';

export const routes: Routes = [
    {'path': '', component: HomeComponent},
    {'path': 'producto', component: productoComponent},
    {'path': 'contact', component: ContactComponent},
    {'path': '', component: NavbarComponent},
    {'path': 'agregarProducto', component: AgregarProductoComponent},
    {'path': 'editarProducto', component: EditarProductoComponent},
    



];
