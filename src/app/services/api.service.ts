import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

      private baseUrl = 'http://127.0.0.1:8000'; 
    
      constructor(private httpClient: HttpClient) {}
    
      listarProductos(): Observable<any> {
        return this.httpClient.get(`${this.baseUrl}/productos`);
      }

      agregarProductos(productoData: any): Observable<any> {
        const url = `${this.baseUrl}/agregar-productos`;
        const headers = new HttpHeaders({
          'Content-Type': 'application/json',
        });
    
        return this.httpClient.post(url, productoData, { headers });
      }
    
      eliminarProductos(ids: string[]): Observable<any> {
        const idParam = ids.join(',');
        return this.httpClient.delete(`${this.baseUrl}/eliminar-producto?id=${idParam}`);
      }
      
    
      editarProducto(producto: any) {
        return this.httpClient.post(`${this.baseUrl}/editar-producto/${producto.sku}`, producto);
      }      

      actualizarProducto(sku: string, producto: any): Observable<any> {
        console.log('Producto a actualizar:', producto);
        const url = `${this.baseUrl}/editar-producto/${sku}`;
        const headers = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded'
        });
      
        return this.httpClient.put(url, producto, { headers });
      }
      
      
  

}
