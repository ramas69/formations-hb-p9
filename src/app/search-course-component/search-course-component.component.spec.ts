import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCourseComponentComponent } from './search-course-component.component';

describe('SearchCourseComponentComponent', () => {
  let component: SearchCourseComponentComponent;
  let fixture: ComponentFixture<SearchCourseComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchCourseComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchCourseComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
