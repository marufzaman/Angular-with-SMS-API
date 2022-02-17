 import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCouresComponent } from './list-coures.component';

describe('ListCouresComponent', () => {
  let component: ListCouresComponent;
  let fixture: ComponentFixture<ListCouresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCouresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCouresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
