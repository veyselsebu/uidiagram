import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Deneme12Component } from './deneme12.component';

describe('Deneme12Component', () => {
  let component: Deneme12Component;
  let fixture: ComponentFixture<Deneme12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Deneme12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Deneme12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
