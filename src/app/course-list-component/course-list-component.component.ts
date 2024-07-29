import { Component, OnInit, Pipe } from '@angular/core';
import { FormationService } from '../../shared/formation.service';
import { IFormation } from '../../shared/entities';
import { CommonModule } from '@angular/common';
import { ToDollarsPipe } from '../../shared/to-dollars.pipe';
import { CbPipe } from '../../shared/cb.pipe';

@Component({
  selector: 'app-course-list-component',
  standalone: true,
  imports: [CommonModule, ToDollarsPipe, CbPipe],
  templateUrl: './course-list-component.component.html',
  styleUrl: './course-list-component.component.css'
})
export class CourseListComponentComponent implements OnInit {

formations:IFormation []= [];
dateDuJour :Date = new Date;

  constructor( private service: FormationService){}

  ngOnInit(): void {
      this.formations = this.service.fetchAll();
  }

}
