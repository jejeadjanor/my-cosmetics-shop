import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

import { IProduct } from './products';


@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct;

  constructor(private route: ActivatedRoute,
                private router: Router) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id')
    this.pageTitle += `: ${id}`;
    this.product = {
      "productId": 1,
      "productName": "Mascara",
      "productCode": "MAS-0011",
      "releaseDate": "February 19, 2020",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 20,
      "starRating": 4.2,
      "imageUrl": "assets/images/mascara.jpg"
    }
  }
  onBack(): void {
    this.router.navigate(['/products']);
  }
}
