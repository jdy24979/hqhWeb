import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsOutComponent } from './goods-out.component';

describe('GoodsOutComponent', () => {
  let component: GoodsOutComponent;
  let fixture: ComponentFixture<GoodsOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodsOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodsOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
