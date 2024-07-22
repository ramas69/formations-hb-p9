import { Component, OnInit } from '@angular/core';
import { FormationService } from '../../shared/formation.service';
import { IFormation } from '../../shared/entities';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-list-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-list-component.component.html',
  styleUrl: './course-list-component.component.css'
})
export class CourseListComponentComponent implements OnInit {

formations:IFormation []= [];

  constructor( private service: FormationService){}

  ngOnInit(): void {
      this.formations = this.service.fetchAll();
  }

}
