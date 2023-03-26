import { Component } from '@angular/core';
import {ProductoModel} from "../models/producto.model";
import {CategoriaModel} from "../models/categoria.model";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  productosDestacados:ProductoModel[] = [
    new ProductoModel(1, "TECLADO LOGITECH", 85000, "TECLADO GAMING LOGITECH G915 TKL MECANICO NEGRO RGB", "keyboard-1.png", 5, 1, ["teclado.png", "teclado-2.png"]),
    new ProductoModel(2, "TECLADO REDRAGON", 122000, "TECLADO REDRAGON K530W RGB BLANCO DRACONIC INALAMBRICO", "keyboard-2.png", 7, 0, ["teclado.png", "teclado-2.png"]),
    new ProductoModel(3, "AEROCOOL SI-5200", 1850000, "EQUIPO AEROCOOL SI-5200 AMD RYZEN 5 4650G", "pc-gaming-aerocool-2.png", 5, 1, ["teclado.png", "teclado-2.png"]),
  ];
  categorias:CategoriaModel[] = [
    new CategoriaModel(1, "Teclados", this.productosDestacados),
    new CategoriaModel(2, "Pc gamer", this.productosDestacados),
    new CategoriaModel(3, "Portatiles", this.productosDestacados),
  ];
  constructor() { }

  ngOnInit(): void {
  }
}
