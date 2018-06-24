import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsInAddComponent } from './goods-in-add.component';

describe('GoodsInAddComponent', () => {
  let component: GoodsInAddComponent;
  let fixture: ComponentFixture<GoodsInAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodsInAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodsInAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
