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

  constructor(
    private ApiService: ApiService,
    private route: ActivatedRoute,
    private router: Router) {}

    ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const productoSeleccionado = params['producto'] ? JSON.parse(params['producto']) : null;

      console.log(productoSeleccionado);

      if (productoSeleccionado) {
        const formattedDate = new Date(productoSeleccionado.created_at).toLocaleString();
        const formattedUpdateDate = productoSeleccionado.updated_at ? new Date(productoSeleccionado.updated_at).toLocaleString() : null;

        this.producto = {
          sku: productoSeleccionado.sku,
          nombre_producto: productoSeleccionado.nombre_producto,
          descripcion: productoSeleccionado.descripcion,
          created_at: formattedDate,
          updated_at: formattedUpdateDate
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
}
