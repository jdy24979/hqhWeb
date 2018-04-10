import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsInComponent } from './goods-in.component';

describe('GoodsInComponent', () => {
  let component: GoodsInComponent;
  let fixture: ComponentFixture<GoodsInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodsInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodsInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
