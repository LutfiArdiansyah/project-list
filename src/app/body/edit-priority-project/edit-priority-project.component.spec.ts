import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPriorityProjectComponent } from './edit-priority-project.component';

describe('EditPriorityProjectComponent', () => {
  let component: EditPriorityProjectComponent;
  let fixture: ComponentFixture<EditPriorityProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPriorityProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPriorityProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
