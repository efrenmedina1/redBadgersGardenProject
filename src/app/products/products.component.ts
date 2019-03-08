import { Component, OnInit } from '@angular/core';
import { ProductService } from './products.service';
import { del } from 'selenium-webdriver/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
public products = {};
public admin = "";
public role = "";

  constructor(private _productService: ProductService) { }

 

  ngOnInit() {


    this._productService.getProducts()
      .subscribe(data => 
        // console.log(data)
        this.products = data
        // console.log(this.products)
        );
        
      
  }
  
  deleteProduct(e) {
    e.preventDefault();
    console.log(e);
    var delID = e.target.elements[0].id;
    var delUrl = `https://efa-gardenapp-backend.herokuapp.com/api/product/${delID}`;
    var token = sessionStorage.getItem('token');
    console.log(token);

    fetch(delUrl, {
      method: 'DELETE',
      headers: new Headers({
        Authorization: token
      })
    }).then(response => response.json())
      .then(json => { console.log(json)})

      .then(refresh =>
        this._productService.getProducts()
      .subscribe(data => 
        // console.log(data)
        this.products = data
        // console.log(this.products)
        ) )
  }

}
