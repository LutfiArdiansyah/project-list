import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStatusProjectComponent } from './edit-status-project.component';

describe('EditStatusProjectComponent', () => {
  let component: EditStatusProjectComponent;
  let fixture: ComponentFixture<EditStatusProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditStatusProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStatusProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
