import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiwOrdersComponent } from './veiw-orders.component';

describe('VeiwOrdersComponent', () => {
  let component: VeiwOrdersComponent;
  let fixture: ComponentFixture<VeiwOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VeiwOrdersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VeiwOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
