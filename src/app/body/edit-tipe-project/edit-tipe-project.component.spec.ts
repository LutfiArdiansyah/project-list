import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTipeProjectComponent } from './edit-tipe-project.component';

describe('EditTipeProjectComponent', () => {
  let component: EditTipeProjectComponent;
  let fixture: ComponentFixture<EditTipeProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTipeProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTipeProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
