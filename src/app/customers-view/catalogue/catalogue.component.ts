import { Component } from '@angular/core';
import {CategoriaModel} from "../models/categoria.model";
import {ProductoModel} from "../models/producto.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent {
  categoriaBuscada = "";
  coincidenciasBusqueda: CategoriaModel[] | undefined;
  index: number | undefined;
  selectedCategoria: CategoriaModel | undefined;
  teclados:ProductoModel[] = [
    new ProductoModel(1, "TECLADO LOGITECH", 85000, "TECLADO GAMING LOGITECH G915 TKL MECANICO NEGRO RGB", "tecladoMecanico.jpg", 5, 1, ["teclado.png", "teclado-2.png"]),
    new ProductoModel(2, "TECLADO REDRAGON", 122000, "TECLADO REDRAGON K530W RGB BLANCO DRACONIC INALAMBRICO", "teclado.jpg", 7, 0, ["teclado.png", "teclado-2.png"]),
    new ProductoModel(5, "TECLADO EVGA", 390000, "TECLADO EVGA Z15 RGB LINEAR SILVER", "tecladoMecanico.jpg", 5, 1, ["teclado.png", "teclado-2.png"]),
    new ProductoModel(6, "TECLADO GAMER THERMALTAKE", 450000, "TECLADO GAMER THERMALTAKE PREMIUM X1 RGB MECANICO", "teclado.jpg", 7, 0, ["teclado.png", "teclado-2.png"]),
    new ProductoModel(7, "TECLADO UNITEC", 55000, "TECLADO UNITEC GAMER REF MK4", "teclado.jpg", 7, 0, ["teclado.png", "teclado-2.png"]),
    new ProductoModel(8, "TECLADO REDRAGON KUMARA", 170000, "TECLADO REDRAGON KUMARA K552RGB (MEC) BLANCO", "teclado.jpg", 7, 0, ["teclado.png", "teclado-2.png"]),
    new ProductoModel(9, "TECLADO G915", 625000, "TECLADO GAMING LOGITECH G915 TKL MECANICO NEGRO RGB", "teclado.jpg", 7, 0, ["teclado.png", "teclado-2.png"]),
    new ProductoModel(10, "TECLADO G413", 315000, "TECLADO LOGITECH G413 CARBON MECANICO", "teclado.jpg", 7, 0, ["teclado.png", "teclado-2.png"]),
    new ProductoModel(11, "TECLADO GIGABYTE", 345000, "TECLADO MECANICO GIGABYTE AORUS K1 CHERRY MX", "teclado.jpg", 7, 0, ["teclado.png", "teclado-2.png"]),
    new ProductoModel(12, "TECLADO REDRAGON K551", 195000, "TECLADO REDRAGON K551 RGB MITRA NEGRO (MEC)", "teclado.jpg", 7, 0, ["teclado.png", "teclado-2.png"]),
    new ProductoModel(13, "TECLADO T-TGK315W-RD", 190000, "TECLADO T-DAGGER GAMER RGB BLANCO T-TGK315W-RD BORA MEANICO", "teclado.jpg", 7, 0, ["teclado.png", "teclado-2.png"]),
    new ProductoModel(14, "TECLADO T-DAGGER MINI", 110000, "TECLADO T-DAGGER MINI GAMER RGB BLANCO T-TGK321W-BR", "teclado.jpg", 7, 0, ["teclado.png", "teclado-2.png"]),
    new ProductoModel(15, "TECLADO LINEAR BRONCE", 390000, "TECLADO EVGA Z15 RGB LINEAR BRONCE", "teclado.jpg", 7, 0, ["teclado.png", "teclado-2.png"]),
    new ProductoModel(16, "TECLADO LINEAR SILVER", 390000, "TECLADO EVGA Z15 RGB LINEAR SILVER", "teclado.jpg", 7, 0, ["teclado.png", "teclado-2.png"]),
    new ProductoModel(17, "TECLADO MEMBRANA", 165000, "TECLADO EVGA Z12 RGB MEMBRANA", "teclado.jpg", 7, 0, ["teclado.png", "teclado-2.png"]),
    new ProductoModel(18, "TECLADO PRODIGY", 175000, "TECLADO LOGITECH G213 PRODIGY RGB ", "teclado.jpg", 7, 0, ["teclado.png", "teclado-2.png"]),
    new ProductoModel(19, "TECLADO K552W-RGB", 170000, "TECLADO REDRAGON K552W-RGB KUMARA (MEC) BLANCO SWITH RED", "teclado.jpg", 7, 0, ["teclado.png", "teclado-2.png"]),
  ];
  pcGamer:ProductoModel[] = [
    new ProductoModel(3, "AEROCOOL SI-5200", 1850000, "EQUIPO AEROCOOL SI-5200 AMD RYZEN 5 4650G", "tecladoMecanico.jpg", 5, 1, ["teclado.png", "teclado-2.png"]),
    new ProductoModel(4, "HALCON", 2200000, "EQUIPO HALCON SERIES FEARLESS AMD RYZEN 5 4650G", "teclado.jpg", 7, 0, ["teclado.png", "teclado-2.png"])
  ];
  portatil:ProductoModel[] = [
    new ProductoModel(5, "Portatil Msi Alpha", 2950000, "Portatil Msi Alpha 17 B5EEK Amd Ryzen 7 5800H Ssd 512 Nvme", "tecladoMecanico.jpg", 5, 1, ["teclado.png", "teclado-2.png"])
  ];
  productos:ProductoModel[] = [
    new ProductoModel(1, "Teclado Mecanico", 85000, "Teclado gamer de tipo mecanico...", "tecladoMecanico.jpg", 5, 1, ["teclado.png", "teclado-2.png"]),
    new ProductoModel(2, "Teclado", 22000, "Teclado basico para funciones diarias...", "teclado.jpg", 7, 0, ["teclado.png", "teclado-2.png"])
  ];
  categorias:CategoriaModel[] = [
    new CategoriaModel(1, "Teclados", this.teclados),
    new CategoriaModel(2, "Pc gamer", this.pcGamer),
    new CategoriaModel(3, "Portatiles", this.portatil),
    new CategoriaModel(4, "Board", this.productos),
    new CategoriaModel(5, "Camara", this.productos),
    new CategoriaModel(6, "Capturadora", this.productos),
    new CategoriaModel(7, "Chasis", this.productos),
    new CategoriaModel(8, "Diademas", this.productos),
    new CategoriaModel(9, "Sillas", this.productos),
    new CategoriaModel(10, "Disipadores", this.productos),
    new CategoriaModel(11, "Discos Externos", this.productos),
    new CategoriaModel(12, "Parlante", this.productos),
    new CategoriaModel(13, "Impresoras", this.productos),
    new CategoriaModel(14, "Mouse", this.productos),
    new CategoriaModel(15, "Reguladores", this.productos),
  ];

  constructor(private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.index = this.route.snapshot.params['categoria'];
    if (this.index != undefined)
      this.selectedCategoria = this.categorias[this.index - 1];
  }

  setSelectedCategoria(categoria: CategoriaModel) {
    this.selectedCategoria = categoria;
  }

  cleanSelectedCategoria() {
    // this.selectedCategoria = undefined;
    this.router.navigate(['catalogo']);
  }

  verProducto(id: number) {
    this.router.navigate(['producto', id]);
  }

  filtrarCategorias() {
    this.coincidenciasBusqueda = [];
    this.categorias.forEach(
      (categoria)=>{
        var lowerCategoria = categoria.nombre.toLowerCase();
        if (lowerCategoria.includes(this.categoriaBuscada.toLowerCase())){
          this.coincidenciasBusqueda?.push(categoria)
          console.log(this.coincidenciasBusqueda);
        }
      }
    );
  }
}
