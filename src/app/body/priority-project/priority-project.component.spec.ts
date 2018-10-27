import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriorityProjectComponent } from './priority-project.component';

describe('PriorityProjectComponent', () => {
  let component: PriorityProjectComponent;
  let fixture: ComponentFixture<PriorityProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriorityProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriorityProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
