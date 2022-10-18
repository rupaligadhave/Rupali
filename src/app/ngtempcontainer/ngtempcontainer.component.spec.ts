import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgtempcontainerComponent } from './ngtempcontainer.component';

describe('NgtempcontainerComponent', () => {
  let component: NgtempcontainerComponent;
  let fixture: ComponentFixture<NgtempcontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgtempcontainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgtempcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
