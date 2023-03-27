import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpericiaComponent } from './expericia.component';

describe('ExpericiaComponent', () => {
  let component: ExpericiaComponent;
  let fixture: ComponentFixture<ExpericiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpericiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpericiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
