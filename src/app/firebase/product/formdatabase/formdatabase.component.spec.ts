import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormdatabaseComponent } from './formdatabase.component';

describe('FormdatabaseComponent', () => {
  let component: FormdatabaseComponent;
  let fixture: ComponentFixture<FormdatabaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormdatabaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormdatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
