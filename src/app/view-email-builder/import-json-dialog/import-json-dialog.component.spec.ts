import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportJsonDialogComponent } from './import-json-dialog.component';

describe('ImportJsonDialogComponent', () => {
  let component: ImportJsonDialogComponent;
  let fixture: ComponentFixture<ImportJsonDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportJsonDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportJsonDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
