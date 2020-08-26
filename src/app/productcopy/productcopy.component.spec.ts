import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductcopyComponent } from './productcopy.component';

describe('ProductcopyComponent', () => {
  let component: ProductcopyComponent;
  let fixture: ComponentFixture<ProductcopyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductcopyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductcopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
