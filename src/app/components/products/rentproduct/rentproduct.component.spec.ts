import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentproductComponent } from './rentproduct.component';

describe('RentproductComponent', () => {
  let component: RentproductComponent;
  let fixture: ComponentFixture<RentproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
