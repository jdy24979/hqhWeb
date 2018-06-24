import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecAddComponent } from './spec-add.component';

describe('SpecAddComponent', () => {
  let component: SpecAddComponent;
  let fixture: ComponentFixture<SpecAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
