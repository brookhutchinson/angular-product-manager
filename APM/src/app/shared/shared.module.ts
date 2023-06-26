// angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// components
import { StarComponent } from './components/star/star.component';

@NgModule({
  // modules
  imports: [
    // angular modules
    CommonModule,
    FormsModule
  ],
  // components
  declarations: [
    StarComponent
  ],
  // exports
  exports: [
    // angular modules
    CommonModule,
    FormsModule
  ]
})
export class SharedModule {}
