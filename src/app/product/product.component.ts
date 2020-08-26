import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  course:string;
  showCourse:boolean=false;
  products=[
    {
      id:'123',
      name:'Laptop',
      price:350
    },
    {
      id:'567',
      name:'Cellphone',
      price:250
    },
    {
      id:'890',
      name:'printer',
      price:150
    }
  ]
  constructor() { }

  ngOnInit() {
    this.course='Javascript';
  }

  submit(){
   this.showCourse=!this.showCourse;
  }
}
