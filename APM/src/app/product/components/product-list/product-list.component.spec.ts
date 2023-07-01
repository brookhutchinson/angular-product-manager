// angular
import { ComponentFixture, TestBed } from '@angular/core/testing';

// components
import { ProductListComponent } from './product-list.component';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ ProductListComponent ]
    });

    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create ProductListComponent', () => {
    expect(component).toBeTruthy();
  });
});
