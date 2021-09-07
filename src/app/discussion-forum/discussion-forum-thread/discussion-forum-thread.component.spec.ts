import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussionForumThreadComponent } from './discussion-forum-thread.component';

describe('DiscussionForumThreadComponent', () => {
  let component: DiscussionForumThreadComponent;
  let fixture: ComponentFixture<DiscussionForumThreadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscussionForumThreadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscussionForumThreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
