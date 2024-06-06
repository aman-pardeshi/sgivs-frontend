import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglearticleComponent } from './singlearticle.component';

describe('SinglearticleComponent', () => {
  let component: SinglearticleComponent;
  let fixture: ComponentFixture<SinglearticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SinglearticleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SinglearticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
