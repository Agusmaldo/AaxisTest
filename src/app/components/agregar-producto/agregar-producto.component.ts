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
    nombre_producto: '',
    descripcion: '',
    created_at: '',
    updated_at: null,
    selected: false
  };

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit() {
    const today = new Date();

    // Resta 3 horas a la fecha actual
    today.setHours(today.getHours() - 3); //Restamos 3h porque Arg es UTF-3. (Otra forma de hacerlo)
    const formattedDate = today.toISOString().slice(0, 19).replace("T", " ");
    this.producto.created_at = formattedDate;
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
