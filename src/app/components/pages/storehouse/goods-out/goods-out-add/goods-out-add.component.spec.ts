import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsOutAddComponent } from './goods-out-add.component';

describe('GoodsOutAddComponent', () => {
  let component: GoodsOutAddComponent;
  let fixture: ComponentFixture<GoodsOutAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodsOutAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodsOutAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
