import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipeProjectComponent } from './tipe-project.component';

describe('TipeProjectComponent', () => {
  let component: TipeProjectComponent;
  let fixture: ComponentFixture<TipeProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipeProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipeProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
