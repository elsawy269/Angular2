import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    selector: 'pm-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})

export class ProductListComponent implements OnInit {


    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    _listFilter: string;
    errorMessage: string;
    get listFilter() {
        return this._listFilter;
    }
    set listFilter(value) {
        this._listFilter = value;
        this.filterProductList = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    filterProductList: IProduct[];


    products: IProduct[];
    constructor(private _productSRV: ProductService) {

    }
    ngOnInit(): void {
        this._productSRV.getProducts()
            .subscribe(products => {
                this.filterProductList = this.products = products;
            },
            error => this.errorMessage = <any>error);
        console.log('In OnInit');
    }
    onRatingClicked(message: string): void {
        this.pageTitle = message;
    }
    performFilter(filterBy: string): IProduct[] {

        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter(product => product.productName.toLocaleLowerCase().indexOf(filterBy) > -1);
    }
    toggleImage(): void {
        this.showImage = !this.showImage;
    }


}
