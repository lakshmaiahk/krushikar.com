import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuynewproductComponent } from './buynewproduct.component';

describe('BuynewproductComponent', () => {
  let component: BuynewproductComponent;
  let fixture: ComponentFixture<BuynewproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuynewproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuynewproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
