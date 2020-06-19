import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MSForumDetailsComponent } from './ms-forum-details.component';

describe('MSForumDetailsComponent', () => {
  let component: MSForumDetailsComponent;
  let fixture: ComponentFixture<MSForumDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MSForumDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MSForumDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
