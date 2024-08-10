import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttestationProcessComponent } from './attestation-process.component';

describe('AttestationProcessComponent', () => {
  let component: AttestationProcessComponent;
  let fixture: ComponentFixture<AttestationProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttestationProcessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AttestationProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
