import { Component, OnInit } from '@angular/core';
import Swal from'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  dtOptions: any = {};

  data: any = {
    firstName: 'Julian',
    lastName: 'Rojas',
  };

  ngOnInit(): void {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'mx-2 btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: "El valor total de tu pedido es de: $",
      text: '¿Estas seguro de realizar el pedido?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Confirmar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Tu pedido fue registrado exitosamente!',
          'Pronto uno de nuestros asesores se pondrá en contacto contigo para indicarte los medios de pago autorizados.',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'Tu pedido no fue registrado',
          'error'
        )
      }
    })
    // -------------------------------
    this.dtOptions = {
      pagingType: 'full_numbers',
      // pageLength: 25,
      // serverSide: true,
      processing: true,
      responsive: true,
      language: {
        url: '../../assets/lang/datatable-spanish.json'
      },
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
      columns: [{
        title: 'ID',
        data: 'id'
      }, {
        title: 'First name',
        data: 'firstName'
      }, {
        title: 'Last name',
        data: 'lastName'
      }],
      // Declare the use of the extension in the dom parameter
      dom: 'Bfrtip',
      // Configure the buttons
      buttons: [
        'columnsToggle',
        'colvis',
        'copy',
        'print',
        'excel',
        {
          text: 'Some button',
          key: '1',
          action: function (e: any, dt: any, node: any, config: any) {
            alert('Button activated');
          }
        }
      ]
    };
  }
}
