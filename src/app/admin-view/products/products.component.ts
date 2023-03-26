import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import Swal from "sweetalert2";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  dtOptions: any = {};

  isEditingProduct: boolean = false;

  isPromotion: boolean = false;

  productStatus: boolean = true;

  ngOnInit(): void {
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
      // ajax: (dataTablesParameters: any, callback) => {
      //   that.service.getUsers(dataTablesParameters)
      //     .subscribe((resp: any) => {
      //       that.users = resp.data;
      //       callback({
      //         recordsTotal: resp.data.total,
      //         recordsFiltered: resp.data.total,
      //         data: resp.data.data,
      //       });
      //     });
      // },
      dom: 'Bfrtip',
      buttons: [
        'copy',
        'print',
        'excel',
      ]
    };
  }

  deleteProduct() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-danger',
        cancelButton: 'mx-2 btn btn-success'
      },
      buttonsStyling: false
    })

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

  login(f: NgForm) {
    const email = f.value.email;
    const password = f.value.password;
    if (password == "a1019150999A" && email == "julianrjs15@gmail.com"){
    }else
      Swal.fire(
        'Inicio de sesión fallido',
        'Usuario o contraseña incorrectos.',
        'error'
      )
  }
}
