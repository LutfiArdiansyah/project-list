import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStatusProjectComponent } from './add-status-project.component';

describe('AddStatusProjectComponent', () => {
  let component: AddStatusProjectComponent;
  let fixture: ComponentFixture<AddStatusProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStatusProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStatusProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
