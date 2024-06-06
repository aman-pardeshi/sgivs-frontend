import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityRegulationsComponent } from './security-regulations.component';

describe('SecurityRegulationsComponent', () => {
  let component: SecurityRegulationsComponent;
  let fixture: ComponentFixture<SecurityRegulationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecurityRegulationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecurityRegulationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
