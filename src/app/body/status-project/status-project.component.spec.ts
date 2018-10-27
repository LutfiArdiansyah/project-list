import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusProjectComponent } from './status-project.component';

describe('StatusProjectComponent', () => {
  let component: StatusProjectComponent;
  let fixture: ComponentFixture<StatusProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
