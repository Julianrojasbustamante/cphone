export class ProductoModel{
  id:number;
  nombre:string;
  precio:number;
  descripcion:string;
  imagenPrincipal:string;
  imagenes:String[];
  unidadesDisponibles:number;
  estado:number;

  is_promotion: boolean;

  promotion_price?: number;


  constructor(id: number, nombre: string, precio: number, descripcion: string, imagenPrincipal: string, unidadesDisponibles: number, estado: number, imagenes: String[], is_promotion: boolean, promotion_price: number) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.descripcion = descripcion;
    this.imagenPrincipal = imagenPrincipal;
    this.imagenes = imagenes;
    this.unidadesDisponibles = unidadesDisponibles;
    this.estado = estado;
    this.is_promotion = is_promotion;
    this.promotion_price = promotion_price;
  }
}
