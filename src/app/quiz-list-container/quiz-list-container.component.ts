import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { QuizService } from '../services/quiz.service';
import { Quiz } from '../models/quiz';
import { quiz_type } from '../models/quiztype';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'quiz-list-container',
  templateUrl: './quiz-list-container.component.html',
  styleUrls: ['./quiz-list-container.component.css'],
})
export class QuizListContainerComponent implements OnInit, OnChanges {
  public quizListItems: Quiz[] = [];
  public freequizListItems: Quiz[] = [];
  public paidquizListItems: Quiz[] = [];
  public subjectId: any = '';
  responsiveOptions;
  constructor(
    private quizService: QuizService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    router.events.subscribe((val) => {
      // see also
      if (val instanceof NavigationEnd) {
        this.subjectId = this.route.snapshot.paramMap.get('subject');
        this.GetQuizListData(this.subjectId);
      }
    });
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  ngOnInit(): void {
    this.subjectId = this.route.snapshot.paramMap.get('subject');
    this.GetQuizListData(this.subjectId);
  }

  ngOnChanges(): void {
    this.GetQuizListData(this.subjectId);
  }
  private GetQuizListData(quizId: string): void {
    this.quizService
      .getQuizListBySubject(quizId)
      .subscribe((quizList: Quiz[]) => {
        this.freequizListItems = quizList.filter(
          (x) => x.quizType == quiz_type.free
        );
        this.paidquizListItems = quizList.filter(
          (x) => x.quizType == quiz_type.paid
        );
      });
  }
}
