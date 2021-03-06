import { Component, OnInit } from '@angular/core';
import { RequestDataService } from '../services/request-data/request-data.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {
  Product;
  constructor(private rds: RequestDataService) {
    this.getCurrentProduct();
    console.log(this.Product)
   }

  ngOnInit() {
  }

  getCurrentProduct(){
    this.Product = this.rds.getRequestData();
  }

}
