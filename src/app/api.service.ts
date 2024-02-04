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
    
        // Optional: You may need to set headers depending on your API requirements
        const headers = new HttpHeaders({
          'Content-Type': 'application/json',
          // Add any other headers as needed
        });
    
        return this.httpClient.post(url, productoData, { headers });
      }
    
      eliminarProductos(ids: string[]): Observable<any> {
        const idParam = ids.join(',');
        return this.httpClient.delete(`${this.baseUrl}/eliminar-producto?id=${idParam}`);
      }
      
    
      editarProducto(sku: string): Observable<any> {
        // Implementa lógica para la edición según tus necesidades
        return this.httpClient.put(`${this.baseUrl}/editar-producto/${sku}`, {});
      }
  

}
