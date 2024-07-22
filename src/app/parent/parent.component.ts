import { Component } from '@angular/core';
import { EnfantComponent } from '../enfant/enfant.component';
import { Enfant2Component } from '../enfant2/enfant2.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [EnfantComponent, Enfant2Component],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  messageParent:string="Va faire les course";
  argentParent : number = 200;
  resultat:number = 0;

  multiplier(montant:number) {
    this.resultat = montant*2;
  }
  
}
