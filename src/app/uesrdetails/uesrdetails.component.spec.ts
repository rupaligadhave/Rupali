import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UesrdetailsComponent } from './uesrdetails.component';

describe('UesrdetailsComponent', () => {
  let component: UesrdetailsComponent;
  let fixture: ComponentFixture<UesrdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UesrdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UesrdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
