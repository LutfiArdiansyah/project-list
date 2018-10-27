import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPriorityProjectComponent } from './add-priority-project.component';

describe('AddPriorityProjectComponent', () => {
  let component: AddPriorityProjectComponent;
  let fixture: ComponentFixture<AddPriorityProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPriorityProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPriorityProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
