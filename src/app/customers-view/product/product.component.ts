import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductoModel} from "../models/producto.model";
import {DataServices} from "../services/data.services";
import Swal from'sweetalert2';
import {ProductInterface} from "../models/product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  index: number | undefined;
  selectedProduct!: ProductInterface;
  productos:ProductoModel[] = [];
  products:ProductInterface[] = [];
  teclados:ProductoModel[] = [];
  cantidad = 1;
  is_promotion: boolean = true;
  promotion_price: number = 25000;

  constructor(
    private route:ActivatedRoute,
    private dataService:DataServices
  ) { }

  setProductos(productos:ProductoModel[]){
    this.productos = productos;
  }

  ngOnInit(): void {
    this.obtenerProductos();
    this.index = this.route.snapshot.params['id'];
    this.obtenerProducto();
  }

  obtenerProductos(){
    this.dataService.cargarProductos().subscribe(
      (productos:ProductoModel[]) => {
        this.productos = productos;
        this.setProductos(productos);
      }
    );
  }

  guardarProductos(){
    // var nuevosProductos = this.productos.concat(this.teclados);
    // this.dataService.guardarProductos(nuevosProductos);
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'mx-2 btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: '¿Estas seguro de agregar el producto ' + this.selectedProduct!.name + " con la cantiadad " + this.cantidad + "?",
      text: "Sí ya lo tenias agregado y lo vuelves a agregar se reemplzará con la cantidad especificada",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, agregar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Agregado!',
          'Tu producto ha sido agregado al carrito de compras.',
          'success'
        )
        this.cantidad = 1;
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'El producto no fue agregado al carrito de compras.',
          'error'
        )
      }
    })
  }

  obtenerProducto() {
    if (this.index != undefined)
      this.dataService.getProduct(this.index).subscribe(
        (product:ProductInterface) => {
          this.selectedProduct = product;
        }
      );
      // this.dataService.obtenerProducto(this.index - 1).subscribe(
      //   (producto:ProductoModel) => {
      //     this.selectedProduct = producto;
      //   }
      // );
  }
}
