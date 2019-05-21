import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacypolPage } from './privacypol.page';

describe('PrivacypolPage', () => {
  let component: PrivacypolPage;
  let fixture: ComponentFixture<PrivacypolPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivacypolPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacypolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
