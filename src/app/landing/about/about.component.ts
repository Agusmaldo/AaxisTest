import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NavigationExtras, RouterLink } from '@angular/router';
import { MatDialog } from '@angular/material/dialog'; 
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterLink, FormsModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  productos: any[] = [];
  selectedProductos: any[] = [];
  loading = true;
  error = false;
  hayProductoSeleccionado: boolean | null = null;
  hayProductoEliminado: boolean | null = null;

  constructor(private apiService: ApiService,
    private dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.apiService.listarProductos().subscribe(
      (data) => {
        this.productos = data;
      },
      (error) => {
        this.error = true;
        console.error('Error al obtener productos:', error);
      },
      () => {
        this.loading = false;
      }
    );
    this.obtenerProductos();
  }


    obtenerProductos(): void {
        // Lógica para obtener productos desde el servicio
        this.apiService.listarProductos().subscribe(
            (data) => {
                this.productos = data;
            },
            (error) => {
                console.error('Error fetching data:', error);
            }
        );
    }

    selectAll(event: any): void {
        // Seleccionar/deseleccionar todos los productos
        this.productos.forEach((producto) => {
            producto.selected = event.target.checked;
        });

        // Actualizar la lista de productos seleccionados
        this.actualizarProductosSeleccionados();
    }

    selectProducto(producto: any): void {
        // Actualizar la lista de productos seleccionados
        this.actualizarProductosSeleccionados();
    }

    actualizarProductosSeleccionados(): void {
        // Filtrar productos seleccionados
        this.selectedProductos = this.productos.filter((producto) => producto.selected);
    }

  // Función para actualizar la lista de productos después de la eliminación
  private actualizarProductos(): void {
    this.apiService.listarProductos().subscribe(
      (data) => {
        this.productos = data;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  
  eliminarProductosSeleccionados(): void {
    const idsSeleccionados = this.productos
      .filter(producto => producto.selected)
      .map(producto => producto.id);

      if(idsSeleccionados){
        this.hayProductoEliminado = false;
        this.hayProductoSeleccionado = null;
      }
  
    if (idsSeleccionados.length > 0) {
      this.apiService.eliminarProductos(idsSeleccionados).subscribe(
        (data) => {
          console.log('Productos eliminados exitosamente:', data);
          // Recargar la lista de productos después de eliminar
          this.router.navigate(['/about']);
          window.location.reload();
          this.hayProductoEliminado = true;
        },
        (error) => {
          console.error('Error al eliminar productos:', error);
          // Manejar el error según sea necesario
          window.location.reload();
          this.router.navigate(['/about']);
        }
      );
    } else {
      console.warn('Ningún producto seleccionado para eliminar.');
      this.hayProductoEliminado = false;
    }
  }

  editarProductosSeleccionados(): void {
    const productoSeleccionado = this.productos.find(producto => producto.selected);
  
    if (productoSeleccionado) {
      this.hayProductoSeleccionado = true;
      this.hayProductoEliminado = null;
  
      const navigationExtras: NavigationExtras = {
        queryParams: { producto: JSON.stringify(productoSeleccionado) }
      };
  
      this.router.navigate(['/editarProducto'], navigationExtras);
    } else {
      this.hayProductoSeleccionado = false;
      this.hayProductoEliminado = null;
      console.warn('Selecciona un producto para editar.');
    }
  }
  

  
  
  


}
