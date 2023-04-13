import {Component, OnInit} from '@angular/core';
import Swal from "sweetalert2";
import {AdminService} from "../services/admin-service";
import {ProductManageInterface} from "../models/product-manage";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(
    private adminService:AdminService
  ) { }
  dtOptions: any = {};

  products: ProductManageInterface[] = [];

  selectedProduct: ProductManageInterface | null = null;

  isEditingProduct: boolean = false;

  isPromotion: boolean = false;

  productStatus: boolean = true;

  async ngOnInit() {
    await this.getProducts();
    this.dtOptions = {
      pagingType: 'full_numbers',
      // pageLength: 25,
      // serverSide: true,
      processing: true,
      responsive: true,
      language: {
        url: '../../assets/lang/datatable-spanish.json'
      },
      // ajax: '../../assets/test-data/test-data.json',
      /*ajax: (dataTablesParameters: any, callback) => {
        that.service.getUsers(dataTablesParameters)
          .subscribe((resp: any) => {
            that.users = resp.data;
            callback({
              recordsTotal: resp.data.total,
              recordsFiltered: resp.data.total,
              data: resp.data.data,
            });
          });
      },*/
      dom: 'Bfrtip',
      buttons: [
        'copy',
        'print',
        'excel',
      ]
    };
  }

  async getProducts() {
    await this.adminService.getProducts()
      .then((products) => this.products = products);
  }

  selectProduct(product: ProductManageInterface) {
    this.isEditingProduct = true;
    this.selectedProduct = product;
  }

  clearSelectedProduct(){
    this.isEditingProduct = false;
    this.selectedProduct = null;
  }

  async deleteProduct(id: number) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-danger',
        cancelButton: 'mx-2 btn btn-success'
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons.fire({
      title: '¿Estas seguro de eliminar este producto?',
      text: "Esta acción no se puede reversar",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.adminService.deleteProduct(id).then(async (resp) => {
          await this.getProducts();
        });
        swalWithBootstrapButtons.fire(
          'Eliminado!',
          'El producto fue eliminado.',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Operación cancelada',
          'El producto no fue eliminado.',
          'error'
        )
      }
    })
  }
}
