import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseListComponentComponent } from './course-list-component/course-list-component.component';
import { SearchCourseComponentComponent } from './search-course-component/search-course-component.component';
import { RegistrationFormComponentComponent } from './registration-form-component/registration-form-component.component';
import { ParentComponent } from './parent/parent.component';

export const routes: Routes = [
    {path:"", component:HomeComponent},
    {path:"formations", component:CourseListComponentComponent},
    {path:"filtre", component:SearchCourseComponentComponent},
    {path:"formulaire", component:RegistrationFormComponentComponent},
    {path:"parent", component:ParentComponent}
];
