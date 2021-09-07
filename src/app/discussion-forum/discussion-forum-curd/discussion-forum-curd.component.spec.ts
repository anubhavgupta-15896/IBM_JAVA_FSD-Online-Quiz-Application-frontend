import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussionForumCURDComponent } from './discussion-forum-curd.component';

describe('DiscussionForumCURDComponent', () => {
  let component: DiscussionForumCURDComponent;
  let fixture: ComponentFixture<DiscussionForumCURDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscussionForumCURDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscussionForumCURDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
