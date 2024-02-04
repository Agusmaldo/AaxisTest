import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { MatDialog } from '@angular/material/dialog'; 
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-producto',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterLink, FormsModule],
  templateUrl: './agregar-producto.component.html',
  styleUrl: './agregar-producto.component.css'
})
export class AgregarProductoComponent {

  producto = {
    sku: '',
    nombre: '',
    descripcion: '',
    created_at: '',
    updated_at: new Date().toISOString() 
  };

  constructor(private apiService: ApiService, private router: Router) {}

  guardarProducto(): void {
    // Lógica para guardar el producto en la base de datos
    this.apiService.agregarProductos(this.producto).subscribe(
      (data) => {
        console.log('Producto guardado exitosamente:', data);
        // Redirigir a la página deseada después de guardar
        this.router.navigate(['/about']);
      },
      (error) => {
        console.error('Error al guardar el producto:', error);
        // Manejar el error según sea necesario
        this.router.navigate(['/about']);
      }
    );
  }
}
