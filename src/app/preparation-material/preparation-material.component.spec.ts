import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreparationMaterialComponent } from './preparation-material.component';

describe('PreparationMaterialComponent', () => {
  let component: PreparationMaterialComponent;
  let fixture: ComponentFixture<PreparationMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreparationMaterialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreparationMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
