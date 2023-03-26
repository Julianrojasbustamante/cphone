import {ProductoModel} from "./producto.model";

export class CategoriaModel{
  id:number;
  nombre:string;
  productos:ProductoModel[];

  constructor(id: number, nombre: string, productos: ProductoModel[]) {
    this.id = id;
    this.nombre = nombre;
    this.productos = productos;
  }
}
