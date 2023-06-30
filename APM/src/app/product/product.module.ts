// angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// shared modules
import { SharedModule } from '../shared/shared.module';

@NgModule({
  // mdoules
  imports: [
    // angular modules
    CommonModule,
    // shared modules
    SharedModule
  ],
  declarations: []
})
export class ProductModule {}
