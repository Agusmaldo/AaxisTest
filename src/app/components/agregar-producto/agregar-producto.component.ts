import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-agregar-producto',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterLink, FormsModule],
  templateUrl: './agregar-producto.component.html',
  styleUrl: './agregar-producto.component.css'
})
export class AgregarProductoComponent implements OnInit {

  producto: Producto = {
    id: 0, 
    sku: '',
    nombre: '',
    descripcion: '',
    created_at: new Date().toISOString(),
    updated_at: null,
    selected: false
  };

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit() {
    const today = new Date();
    today.setDate(today.getDate() - 1);
  
    const offset = today.getTimezoneOffset() / 60; 
    today.setHours(today.getHours() - offset + 3);
  
    const formattedDate = today.toISOString().split('T')[0] + ' ' + today.toTimeString().split(' ')[0];
    this.producto.created_at = formattedDate;
    this.producto.updated_at = formattedDate
    console.log(this.producto.created_at);
  }
  
  guardarProducto(): void {    
    this.apiService.agregarProductos(this.producto).subscribe(
      (data) => {
        console.log('Producto guardado exitosamente:', data);
        this.router.navigate(['/producto']);
      },
      (error) => {
        console.error('Error al guardar el producto:', error);
        this.router.navigate(['/producto']);
      }
    );
  }
}
