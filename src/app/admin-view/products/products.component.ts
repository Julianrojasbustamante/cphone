import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  dtOptions: any = {};

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
