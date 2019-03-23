import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstConfigPage } from './first-config.page';

describe('FirstConfigPage', () => {
  let component: FirstConfigPage;
  let fixture: ComponentFixture<FirstConfigPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstConfigPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstConfigPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
