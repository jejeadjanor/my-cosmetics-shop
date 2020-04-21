import { Injectable } from '@angular/core';

import { IProduct } from './products';

@Injectable({
    providedIn: 'root'
})

export class ProductService{
    getProducts(): IProduct[]{
        return[
            {
                "productId": 1,
                "productName": "Mascara",
                "productCode": "MAS-0011",
                "releaseDate": "March 19, 2020",
                "description": "Leaf rake with 48-inch wooden handle.",
                "price": 19.95,
                "starRating": 4.2,
                "imageUrl": "assets/images/mascara.jpg"
              },
              {
                "productId": 3,
                "productName": "Lip gloss",
                "productCode": "LPX-0048",
                "releaseDate": "April 21, 2020",
                "description": "Curved claw steel hammer",
                "price": 8.9,
                "starRating": 4.5,
                "imageUrl": "assets/images/lip gloss.jpg"
              },
              {
                "productId": 3,
                "productName": "Eye Shadow",
                "productCode": "EYS-0032",
                "releaseDate": "February 4, 2020",
                "description": "Leaf rake with 48-inch wooden handle.",
                "price": 25,
                "starRating": 3.8,
                "imageUrl": "assets/images/eyeshadow.jpg"
              }
        ];
    }
}