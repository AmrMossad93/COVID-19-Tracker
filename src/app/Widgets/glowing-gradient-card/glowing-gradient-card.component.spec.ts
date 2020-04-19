import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlowingGradientCardComponent } from './glowing-gradient-card.component';

describe('GlowingGradientCardComponent', () => {
  let component: GlowingGradientCardComponent;
  let fixture: ComponentFixture<GlowingGradientCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlowingGradientCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlowingGradientCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
