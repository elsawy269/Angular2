import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './product-detials.component.html',
  styleUrls: ['./product-detials.component.css']
})
export class ProductDetialsComponent implements OnInit {
  pageTitle: string = 'Product Details';
  product: IProduct;
  constructor(private _activeRoute: ActivatedRoute,
    private _router: Router) {
   }

  ngOnInit() {
    let id = +this._activeRoute.snapshot.paramMap.get('id');
    this.pageTitle += `${id}`;
    this.product = {
      'productId': 1,
      'productName': 'Leaf Rake',
      'productCode': 'GDN-0011',
      'releaseDate': 'March 19, 2016',
      'description': 'Leaf rake with 48-inch wooden handle.',
      'price': 19.95,
      'starRating': 3.2,
      'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png'
    };
  }

  onBack(): void {
    this._router.navigate(['/products']);
  }

}
