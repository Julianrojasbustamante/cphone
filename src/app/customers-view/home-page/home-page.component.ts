import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  featuredProducts:any[] = [{}, {}, {}];
  categories:any[] = [
    {id: 1, name: "Promoción"},
    {id: 2, name: "Más vendidos"}
  ];
  constructor() { }

  ngOnInit(): void {
  }
}
