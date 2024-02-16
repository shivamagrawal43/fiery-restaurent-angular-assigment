import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacePaymentComponent } from './place-payment.component';

describe('PlacePaymentComponent', () => {
  let component: PlacePaymentComponent;
  let fixture: ComponentFixture<PlacePaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlacePaymentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlacePaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
