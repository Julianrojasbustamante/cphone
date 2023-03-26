export class ProductoModel{
  id:number;
  nombre:string;
  precio:number;
  descripcion:string;
  imagenPrincipal:string;
  imagenes:String[];
  unidadesDisponibles:number;
  estado:number;


  constructor(id: number, nombre: string, precio: number, descripcion: string, imagenPrincipal: string, unidadesDisponibles: number, estado: number, imagenes: String[]) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.descripcion = descripcion;
    this.imagenPrincipal = imagenPrincipal;
    this.imagenes = imagenes;
    this.unidadesDisponibles = unidadesDisponibles;
    this.estado = estado;
  }
}
