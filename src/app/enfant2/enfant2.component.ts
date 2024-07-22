import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-enfant2',
  standalone: true,
  imports: [],
  templateUrl: './enfant2.component.html',
  styleUrl: './enfant2.component.css'
})
export class Enfant2Component {
  @Input() argentdePoche : number|undefined = 0;
}
