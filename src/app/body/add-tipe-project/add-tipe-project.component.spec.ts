import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTipeProjectComponent } from './add-tipe-project.component';

describe('AddTipeProjectComponent', () => {
  let component: AddTipeProjectComponent;
  let fixture: ComponentFixture<AddTipeProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTipeProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTipeProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
