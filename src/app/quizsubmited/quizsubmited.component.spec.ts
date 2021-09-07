import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizsubmitedComponent } from './quizsubmited.component';

describe('QuizsubmitedComponent', () => {
  let component: QuizsubmitedComponent;
  let fixture: ComponentFixture<QuizsubmitedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizsubmitedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizsubmitedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
