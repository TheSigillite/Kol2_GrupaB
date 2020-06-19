import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MSForumComponent } from './ms-forum.component';

describe('MSForumComponent', () => {
  let component: MSForumComponent;
  let fixture: ComponentFixture<MSForumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MSForumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MSForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
