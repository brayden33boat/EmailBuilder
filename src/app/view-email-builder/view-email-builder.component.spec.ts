import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmailBuilderComponent } from './view-email-builder.component';

describe('ViewEmailBuilderComponent', () => {
  let component: ViewEmailBuilderComponent;
  let fixture: ComponentFixture<ViewEmailBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewEmailBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEmailBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
