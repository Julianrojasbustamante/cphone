import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  featuredProducts:any[] = [{}, {}, {}];
  categories:any[] = [
    {id: 1, name: "Promoción", color: "btn-warning"},
    {id: 3, name: "Más vendidos", color: "btn-danger text-white"}
  ];
  constructor() { }
}

