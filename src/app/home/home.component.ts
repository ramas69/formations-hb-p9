import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
/* Methode 1 avec FormsModule , NgModel et NgForm
  nom:string =" Bonjour Villeurbanne";
  username:string = "";
  password:string = "";

  onSubmit(form:NgForm){
    console.log(form.value);
  }*/

    public form:FormGroup = new FormGroup({
      name: new FormControl('', {validators:[Validators.required, Validators.minLength(4), Validators.max(10)]}),
      email: new FormControl('', {validators:[Validators.email]}),

    })

    onSubmit(){
      console.log(this.form.get('name')?.value)
      console.log(this.form.get('email')?.value)
    }

}
