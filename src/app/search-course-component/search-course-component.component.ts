import { Component, OnInit } from '@angular/core';
import { FormationService } from '../../shared/formation.service';
import { IFormation } from '../../shared/entities';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-course-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-course-component.component.html',
  styleUrl: './search-course-component.component.css'
})
export class SearchCourseComponentComponent implements OnInit {

  formations:IFormation []= [];
  filteredFormations: IFormation[] = [];

  constructor(private service: FormationService) { }

  ngOnInit(): void {
      this.filteredFormations = this.getFormations()
  }

  getFormations(){
    return this.formations = this.service.fetchAll();
  }


  handleChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedDomaine = selectElement.value;

    if (selectedDomaine) {
      this.filteredFormations = this.formations.filter(formation => formation.domaine === selectedDomaine);
    } else {
      this.filteredFormations = this.formations;
    }
  }



}
