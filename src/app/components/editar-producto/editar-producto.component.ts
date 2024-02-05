import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editar-producto',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './editar-producto.component.html',
  styleUrl: './editar-producto.component.css'
})
export class EditarProductoComponent implements OnInit{

  producto: any; // Puedes definir el tipo de 'producto' según tu modelo de datos
  fechaActualFormateada: string;

  constructor(
    private ApiService: ApiService,
    private route: ActivatedRoute,
    private router: Router) {
      this.fechaActualFormateada = this.obtenerFechaActualFormateada();
    }

    ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const productoSeleccionado = params['producto'] ? JSON.parse(params['producto']) : null;

      if (productoSeleccionado) {
       
        this.producto = {
          sku: productoSeleccionado.sku,
          nombre_producto: productoSeleccionado.nombre_producto,
          descripcion: productoSeleccionado.descripcion,
        };
      } else {
        console.warn('No se proporcionó un producto para editar.');
      }
    });
  }

  guardarProductoEditado(): void {
      if (this.producto.sku) {
        this.ApiService.actualizarProducto(this.producto.sku, this.producto).subscribe(
          (response) => {
            console.log('Producto actualizado correctamente:', response);
            this.router.navigate(['/producto']);
          },
          (error) => {
            console.error('Error al actualizar el producto:', error);
            this.router.navigate(['/producto']);
          }
        );
      } else {
        console.warn('SKU del producto no válido.');
      }
    }

  //Formateo la fecha
  private obtenerFechaActualFormateada(): string {
    const fechaActual = new Date();
    const formattedDate = fechaActual.toLocaleString('es-AR', { timeZone: 'America/Argentina/Buenos_Aires' });

    return formattedDate;
  }

}
