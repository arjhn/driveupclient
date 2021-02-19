import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PnotfComponent } from './pnotf.component';

describe('PnotfComponent', () => {
  let component: PnotfComponent;
  let fixture: ComponentFixture<PnotfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PnotfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PnotfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
