import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProjectNameComponent } from './add-project-name.component';

describe('AddProjectNameComponent', () => {
  let component: AddProjectNameComponent;
  let fixture: ComponentFixture<AddProjectNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProjectNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProjectNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
