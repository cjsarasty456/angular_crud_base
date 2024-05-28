import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditProductsComponent } from './create-edit-products.component';

describe('CreateEditProductsComponent', () => {
  let component: CreateEditProductsComponent;
  let fixture: ComponentFixture<CreateEditProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateEditProductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateEditProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
