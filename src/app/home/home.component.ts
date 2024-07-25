import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';


export const motsInterdits = (control:AbstractControl): ValidationErrors | null=> {
   const mots = ["lol", "mdr"];
   return mots.includes(control.value) ? {interdit:"Ce mot est interdit"}:null
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
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
      name: new FormControl('', {validators:[Validators.required, Validators.minLength(4), Validators.maxLength(10), motsInterdits]}),
      email: new FormControl('', {validators:[Validators.email, motsInterdits]}),

    })

    onSubmit(){
      if(this.form.valid){
        console.log(this.form.get('name')?.value);
        console.log(this.form.get('email')?.value);
        this.form.reset();
      }
     
    }

}
