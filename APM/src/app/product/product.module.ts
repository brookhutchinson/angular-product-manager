// angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// shared modules
import { SharedModule } from '../shared/shared.module';

// components
import { ProductListComponent } from './components/product-list/product-list.component';

@NgModule({
  // modules
  imports: [
    // angular modules
    CommonModule,
    // shared modules
    SharedModule
  ],
  declarations: [
    // components
    ProductListComponent
  ]
})
export class ProductModule {}
