import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscribtionCardComponent } from './discribtion-card.component';

describe('DiscribtionCardComponent', () => {
  let component: DiscribtionCardComponent;
  let fixture: ComponentFixture<DiscribtionCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscribtionCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscribtionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
