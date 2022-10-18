import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgaddimisionComponent } from './pgaddimision.component';

describe('PgaddimisionComponent', () => {
  let component: PgaddimisionComponent;
  let fixture: ComponentFixture<PgaddimisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PgaddimisionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PgaddimisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
