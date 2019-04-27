import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyusedproductComponent } from './buyusedproduct.component';

describe('BuyusedproductComponent', () => {
  let component: BuyusedproductComponent;
  let fixture: ComponentFixture<BuyusedproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyusedproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyusedproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
