import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassportServiceComponent } from './passport-service.component';

describe('PassportServiceComponent', () => {
  let component: PassportServiceComponent;
  let fixture: ComponentFixture<PassportServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PassportServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PassportServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
