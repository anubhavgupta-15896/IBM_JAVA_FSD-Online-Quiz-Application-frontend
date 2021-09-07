import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizListContainerComponent } from './quiz-list-container.component';

describe('QuizListContainerComponent', () => {
  let component: QuizListContainerComponent;
  let fixture: ComponentFixture<QuizListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizListContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
