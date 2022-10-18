import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChlidComponent } from './chlid.component';

describe('ChlidComponent', () => {
  let component: ChlidComponent;
  let fixture: ComponentFixture<ChlidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChlidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChlidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
