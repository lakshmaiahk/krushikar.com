import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellproductComponent } from './sellproduct.component';

describe('SellproductComponent', () => {
  let component: SellproductComponent;
  let fixture: ComponentFixture<SellproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
