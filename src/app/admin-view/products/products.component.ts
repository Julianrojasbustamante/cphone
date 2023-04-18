import {Component, OnInit} from '@angular/core';
import Swal from "sweetalert2";
import {AdminService} from "../services/admin-service";
import {ProductManageInterface} from "../models/product-manage";
import {DataServices} from "../../customers-view/services/data.services";
import {CategoryInterface} from "../../customers-view/models/category";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(
    private adminService:AdminService,
    private dataService:DataServices
  ) { }
  dtOptions: any = {};

  products: ProductManageInterface[] = [];

  selectedProduct!: ProductManageInterface;

  categoriesOptions: any[] = [];

  selectedImage: File | null = null;

  user_id!: number;

  async ngOnInit() {
    await this.getProducts();
    this.dtOptions = {
      pagingType: 'full_numbers',
      processing: true,
      responsive: true,
      language: {
        url: '../../assets/lang/datatable-spanish.json'
      },
      dom: 'Bfrtip',
      buttons: [
        'copy',
        'print',
        'excel',
      ]
    };
    await this.getCategoriesOptions();
    await this.clearSelectedProduct();
    this.user_id = parseInt(localStorage.getItem('user_id') as string);
  }

  async getProducts() {
    this.products = [];
    await this.adminService.getProducts()
      .then((products) => this.products = products);
  }

  validateRequiredFields() {
    return !this.isNull(this.selectedProduct.main_image)
      && !this.isNull(this.selectedProduct.category) && !this.isNull(this.selectedProduct.description)
      && this.isPromotion() && !this.isNull(this.selectedProduct.units_available)
      && !this.isNull(this.selectedProduct.name);
  }

  isPromotion() {
    return this.selectedProduct.is_promotion ? !this.isNull(this.selectedProduct.promotion_price) : !this.selectedProduct.is_promotion;
  }

  isNull(field: any) {
    return field === null || field === '' || field === 0;
  }

  async saveProduct() {
    if (this.validateRequiredFields()) {
      this.selectedProduct.user = this.user_id;
      if (this.selectedProduct.id === 0)
        await this.adminService.saveProduct(this.selectedProduct).then((res) => {
          Swal.fire(
            'Registro exitoso!',
            'Producto creado exitosamente!',
            'success'
          )
          this.getProducts();
        }).catch((error) => {
          Swal.fire(
            'Error',
            'Se ha producido un error.' + error,
            'error'
          )
        });
      else
        await this.adminService.updateProduct(this.selectedProduct).then((res) => {
          Swal.fire(
            'Actualización exitosa!',
            'Producto actualizado exitosamente!',
            'success'
          )
          this.getProducts();
        }).catch((error) => {
          Swal.fire(
            'Error',
            'Se ha producido un error: ' + error.detail,
            'error'
          )
        });
    }
  }

  async getCategoriesOptions() {
    await this.dataService.getCategories().then((categories: CategoryInterface[]) => {
      this.categoriesOptions = categories.map((category: CategoryInterface) => {
        return {
          value: category.id,
          label: category.name,
        }
      });
    })
  }

  selectProduct(product: ProductManageInterface) {
    this.selectedProduct = product;
  }

  getImageInBase64(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64Img = reader.result as string;
      this.selectedProduct!.main_image = base64Img;
    };
  }

  getCurrentDate(){
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  async clearSelectedProduct(){
    this.selectedProduct = {
      id: 0,
      name: '',
      price: null,
      units_available: null,
      description: '',
      is_promotion: false,
      promotion_price: 0,
      main_image: '',
      status: true,
      created_at: this.getCurrentDate(),
      updated_at: this.getCurrentDate(),
      category: 0,
      user: this.user_id,
    } as ProductManageInterface;
    this.selectedImage = null;
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
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire(
          'Operación cancelada',
          'El producto no fue eliminado.',
          'error'
        )
      }
    })
  }
}
