import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-enfant2',
  standalone: true,
  imports: [],
  templateUrl: './enfant2.component.html',
  styleUrl: './enfant2.component.css'
})
export class Enfant2Component {
  nombre:number = 0;
  @Input() argentdePoche : number|undefined = 0;
  @Output() numberEnfant = new EventEmitter<number>();


calcul(){
  this.nombre++;
    this.numberEnfant.emit(this.nombre)
  }


}
