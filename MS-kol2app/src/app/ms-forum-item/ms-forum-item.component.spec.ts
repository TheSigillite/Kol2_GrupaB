import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MSForumItemComponent } from './ms-forum-item.component';

describe('MSForumItemComponent', () => {
  let component: MSForumItemComponent;
  let fixture: ComponentFixture<MSForumItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MSForumItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MSForumItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
