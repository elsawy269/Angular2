import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConverToSpacePipe } from '../shared/convert-to-spaces.pipe';
import { ProductListComponent } from './products.component';
import { StarComponent } from '../shared/start.component';
import { ProductDetialsComponent } from './product-detials.component';
import { ProductGuardService } from './product-guard.service';
import { ProductService } from './product.service';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', component: ProductDetialsComponent, canActivate: [ProductGuardService] }
    ]),
    SharedModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetialsComponent,
    ConverToSpacePipe

  ],
  providers: [
    ProductService,
    ProductGuardService
  ]
})
export class ProductModule { }
