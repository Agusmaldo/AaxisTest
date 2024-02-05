export interface Producto {
    id: number;
    sku: string;
    nombre: string;
    descripcion: string;
    created_at: string;
    updated_at: string | null;
    selected: boolean;
  }