export class ProductoShopingCartModel{
  id:number;
  nombre:string;
  precio:number;
  descripcion:string;
  cantidad:number;

  constructor(id: number, nombre: string, precio: number, descripcion: string, cantidad: number) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.descripcion = descripcion;
    this.cantidad = cantidad;
  }
}
